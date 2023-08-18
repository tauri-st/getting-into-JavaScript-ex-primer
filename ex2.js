//Declare a variable for money in your bank account
var bank_account = 512.82;

//Declare variables for phone and accessory costs
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

/* Function to subtract money per phone purchase in a loop 
until bank account money runs out */
/*if (PHONE_PRICE <= bank_account) {
  bank_account -= PHONE_PRICE;
}
console.log(bank_account); */
do {
  bank_account -= PHONE_PRICE + ACCESSORY_PRICE;
} while (bank_account >= PHONE_PRICE + ACCESSORY_PRICE);
console.log(bank_account);

//Total Price of Phone Purchase

/* for (i = 0; purchase < bank_account; i++) {
    purchase = bank_account + ACCESSORY_PRICE;
    console.log(purchase); */
