# Class:

        In javaScript class is type of function.

class User {
constructor(name) { this.name = name; }
sayHi() { alert(this.name); }
}

## 1) Here class "User" creates a function. The function code is taken from the constructor method

(assumed empty if we don't write such method).

## 2) Stores class methods, such as "sayHi" in User.prototype.

After new User object is created, when we call its method, it's taken from the prototype.
So the object has access to class methods.

## Example

      class User {
         constructor(name) { this.name = name; }
         sayHi() { alert(this.name); }

}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

### What is Lexical Scope in JavaScript?

    an item's lexical scope is the place in which the item got created.

## Note:

### Another name for lexical scope is static scope.

### The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.

## Example of Lexical Scope

     Consider the code below:

// Define a variable in the global scope:
const myName = "Oluwatobi";

// Call myName variable from a function:
function getName() {
return myName;
}

In the snippet above, notice that we defined the myName variable in the global scope and called it in the getName() function.

Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?

Answer: Remember that lexical scope means definition space — not invocation space. Therefore, myName’s lexical scope is the global scope because we defined myName in the global environment.

Another example of lexical scope
function getName() {
const myName = "Oluwatobi";
return myName;
}
