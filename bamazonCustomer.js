var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "NiwaTest6969",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayInventory();
  });

  function displayInventory(){
    connection.query("SELECT * FROM products", function(err, response){
        if (err) throw err;
        var itemID = [];
        for (var i=0; i<response.length; i++) {
            console.log("Item ID: " + response[i].item_id + " | Product ID: " + response[i].product_name + " | Department Name: " + response[i].department_name + " |  Price $" + response[i].price);
            itemID.push(response[i].item_id)
        };
        inquirer
        .prompt([{
          name: "item_buy",
          type: "input",
          message: "What item ID would you like to buy? (enter Item ID #)",
        },
        // prompt item ID number, no string parsing
        {
            name: "item_quantity",
          type: "input",
          message: "What quantity of this item would you like to buy?",
        }
        ])
        .then(function(answer){
            /* var buying= parseInt(itemID.indexOf(answer.item_buy)); */
            var parseBuy = (parseInt(answer.item_buy));
            var parseQuant= (parseInt(answer.item_quantity));
            var buying= itemID.indexOf(answer.item_buy);
            var remaining;
           /*  console.log(answer);
            console.log(itemID); */
            /* console.log(parseBuy);
            console.log(itemID.indexOf(answer.item_buy)); */
            /* console.log(buying); */
           /*  console.log(parseQuant);
            console.log(response[parseBuy-1].stock_quantity); */
            if (isNaN(parseBuy) == false && itemID.indexOf(parseBuy) > -1) {
                console.log("This item exists!");
                if (parseQuant > response[parseBuy-1].stock_quantity) {
                    console.log("BUT we dont have that much in stock, so lets try this again!")
                    displayInventory();
                } else {
                    console.log("Thank you for your purchase! That will be $" + response[parseBuy-1].price * parseQuant + ". The corporate overlords at Bamazon appreciate your patronage");
                    remaining= response[parseBuy-1].stock_quantity - parseQuant;
                    console.log(remaining);
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                          { 
                            /* stock_quantity: response[parseBuy-1].stock_quantity - parseQuant  */
                            stock_quantity: remaining
                          },
                          {
                            id: parseBuy
                          }
                        ],
                        
                        function(error) {
                          if (error) throw err;      
                        }
                      );
                } 
                //response[buying].stock_quantity < answer.stock_quantity
                console.log("Item ID: " + response[i].item_id + " | Product ID: " + response[i].product_name + " | Department Name: " + response[i].department_name + " |  Price $" + response[i].price);
            } else {
                console.log("You entered an invalid item number, please try again!!");
                displayInventory();
            }
       
        })
        
//validate item number is entereed and number exists in inventory

});
};




 