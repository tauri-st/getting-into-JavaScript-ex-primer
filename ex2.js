//Declare a variable for money in your bank account
var bank_account = 512.82;

//Declare variables for phone, accessory costs, and tax rate and spend limit
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const TAX = 0.08;
const SPENDING_LIMIT = 200;

//Declare a variable to hold final purchase amount
var purchase = 0;
var phoneCount = 0;

do {
  bank_account -= PHONE_PRICE;
  phoneCount += 1;
} while (bank_account >= PHONE_PRICE);
//console.log(bank_account);
//console.log(phoneCount);

//Buy accessory so long as it is less than spending limit
if (ACCESSORY_PRICE <= SPENDING_LIMIT) {
  purchase += ACCESSORY_PRICE;
}

//Calculate Price of Phone Purchase with Tax
purchase += PHONE_PRICE * phoneCount;
var taxForPurchase = purchase * TAX;
purchase += taxForPurchase;

//Properly format total purchase amount
console.log(`Purchase total is: $${purchase.toFixed(2)}`);

//Can you afford this purchase?
if (purchase > bank_account) {
  console.log("You can't afford this!");
} else {
  console.log("YOLO, go for it!");
}

/* function addTax(purchase, TAX) {
  var taxForPurchase = purchase * TAX;
  purchase += taxForPurchase;
}
addTax(purchase, TAX);
console.log(purchase); */

/* for (i = 0; PHONE_PRICE <= bank_account; i++) {
    purchase = bank_account + ACCESSORY_PRICE;
    console.log(purchase); 
}*/

/* Function to subtract money per phone purchase in a loop 
until bank account money runs out */

/* function phone_purchase (PHONE_PRICE, purchase, phoneCount) {
  for (i = 0; PHONE_PRICE <= bank_account; i++) {
    bank_account -= PHONE_PRICE;
    var phoneCount = console.log([i]);
  }
  purchase = phoneCount*PHONE_PRICE
  console.log(purchase);
}

for (i = 0; PHONE_PRICE <= bank_account; i++) {
  bank_account -= PHONE_PRICE;
  function phone_purchase(PHONE_PRICE) {
    purchase = [i]*PHONE_PRICE
    console.log(purchase);
  }
} */
