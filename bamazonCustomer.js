// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// MySQL DB Connection Information (remember to change this with our specific credentials) //
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bamazon_db"
});

// Initiate MySQL Connection //
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  checkProducts();
  askQuestions();
});

// Function that displays the item ID, Name, and Price //
function checkProducts () {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    var choiceArray = [];
    for (var i = 0; i < results.length; i++) {
    choiceArray.push("Item ID: " + results[i].item_id);
    choiceArray.push("Product Name: "+ results[i].product_name);
    choiceArray.push("Product Price: $"+ results[i].price);
    choiceArray.push("--------------------------Next Available Product--------------------------");
    }
    console.log("--------------------------Below is a list of items available for sale--------------------------");
    console.log(choiceArray);
    return choiceArray;
  });
}

  // Asks customer what produce ID they want and the Quantity //
function askQuestions() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    inquirer
    .prompt([
              { name: "itemID",
                type: "input",
                message: "What ID of product would you like to buy?"
              },
              { name: "unitAmount",
                type: "input",
                message: "How many units are you going to purchase?"
              }
              ])

     .then (function(answer) {
                var itemToBuy = answer.itemID;
                var numberInStock;
                var perUnitPrice;

      // Loops through array to find item quantity and per unit price //
      for (var i = 0; i < results.length; i++) {
        if (results[i].item_id == itemToBuy) {
            numberInStock = (results[i].stock_quantity);
            perUnitPrice = (results[i].price);
        }
      }
            // Check if the quantity of item requested is less than the number in stock //
            if (numberInStock < parseInt(answer.unitAmount)) {
                console.log("Insufficient Quantity");
            }
            // Otherwise update the quantity inside SQL //
             else {
                  var newQuantity = (parseInt(numberInStock -= answer.unitAmount));
                  connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                      {
                      stock_quantity: newQuantity
                      },
                      {
                      item_id: itemToBuy
                      }
                    ],
            // Display the amount due by customer //
            function(err, res) {
                  console.log("Your total comes to: $" + (answer.unitAmount * perUnitPrice));
                  }
                  );
              }
          })
      })
      connection.end();
    };
