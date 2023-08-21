//Declare a variable for money in your bank account
var bank_account = 512.82;

//Declare variables for phone, accessory costs, and tax rate and spend limit
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const TAX = 0.08;
const SPENDING_LIMIT = 200;

//Declare a variable to hold final purchase amount
var purchase = 0;

/* Function to subtract money per phone purchase in a loop 
until bank account money runs out */
do {
  bank_account -= PHONE_PRICE;
} while (bank_account >= PHONE_PRICE);
console.log(bank_account);

//Buy accessory so long as it is less than spending limit
if (ACCESSORY_PRICE <= SPENDING_LIMIT) {
  purchase += ACCESSORY_PRICE;
}

//Calculate Price of Phone Purchase with Tax


/* for (i = 0; purchase < bank_account; i++) {
    purchase = bank_account + ACCESSORY_PRICE;
    console.log(purchase); */
