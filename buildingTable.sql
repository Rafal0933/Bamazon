Use bamazon_db;

CREATE TABLE products (
  item_id INT (10) AUTO_INCREMENT,
  product_name VARCHAR (100),
  department_name VARCHAR (100),
  price INT(100) NULL,
  stock_quantity INT (100) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("toothbrush", "toiletries", 3.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("soap", "toiletries", 4.00, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("hairbrush", "toiletries", 2.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("mouth wash", "toiletries", 4.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("razor", "toiletries", 4.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("towel", "toiletries", 1.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("deodorant", "toiletries", 7.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("shampoo", "toiletries", 4.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("conditioner", "toiletries", 3.00, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("lotion", "toiletries", 2.00, 25);

