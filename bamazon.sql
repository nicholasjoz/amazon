DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT  AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mario Kart", "Video Games", 60, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox One", "Video Games", 400, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Splatoon", "Video Games", 60, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spatula", "Kitchen", 10, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Frying Pan", "Kitchen", 20, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunscreen", "Outdoors", 4, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bicycle", "Outdoors", 600, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Kitchen", 2, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black T-Shirts", "Apparel", 12, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Smelly Socks", "Apparel", 99, 2);

SELECT * FROM products;