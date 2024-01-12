# Hoisting
 ### It is a default behaviour of JS where a variable can be used before declaration

 In simple words, a variable can be called outside/before even if it is initialized in the function or declared later in the code.
 e-g, at line number 6, a variable is used inside a function but it is declared in line number 16.

 Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:
