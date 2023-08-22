# Programming Primer (in JS)

## Ex1:

This is an exercise to practice basic programming principles.

## Instructions

The code of this exercise can be executed via Node.js or in the console tab of your browser's developer tools.

1. Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.

2. If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.

	Hints:

	- `someString.includes(anotherString)` will return `true` if `anotherString` is found inside `someString`, or `false` otherwise.

	- Use `!` to negate a boolean value (change `true` to `false` or vice versa).

	- `someArray.push(value)` will add a value to the end of the array.

3. Define a `printFavoriteBooks()` function that receives no parameters.

4. `printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks` array.

	Hint:

	- Use the \` back-tick operators for strings that need to include values in them.

	- Use `console.log(..)` to print a message to the screen.

5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.

	Make sure to then call the `printFavoriteBooks()` function at the end of the program.

	Hint: Use the `for ( let .. of .. ) { }` style loop.

## Ex 2
- Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
- After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
- Finally, check the amount against your bank account balance to see if you can afford it or not.
- You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a variable for your “bank account balance.””
- You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places.
- Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in “Input” earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!