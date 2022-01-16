# backend
# Learning Outcomes
**What is the difference between front-end and back-end development?**
**Why are we required to install back-end languages on our computer (besides to run them)?**

You can access the page from <a href="https://cleargoaldigital.github.io/library/">here</a>

<code>a + b</code>
<<<<<<< Updated upstream
=======

# Confusing Concepts in JS

*What is Scope?*
*What is Global/Local Scope?*
*What is a namespace and how does it differ to scope?*
*What is **this** keyword and how does Scope affect it?*
*What is Function/Lexical Scope?*
*What are Closures?*
*What is Public/Private Scope?*
*How can I understand/create/do all of the above?*


**What is Scope?**
Scope refers to the current context of your code. It can be globally or locally defined. Understanding scope helps developers write better, cleaner as well as understand where variables and functions are accessible and able to conveniently change the scope. It also helps in **debugging.**

*Global Scope*
The very first space into which a JS is first wriiten is called Global Scope. That is, when you first declare a variable, it is done in global scope.
_// global scope_
let name = "Taofeek";
>>>>>>> Stashed changes

*Local Scope*

This is any scope defined beyond the global scope. Typically,there is only one global scope, and each function has its own local scope. Any function defined within another function has a local scope which is linked to the outer function.

*// Variable Declaration: Global Scope*
let myScope = function(){
    *variable declaration: Local scope*
}

Any function/variables defined within a new scope is not accessible outside the scope.

let myScope = function(){
    let name = 'Taofeek';
    console.log(name); // Taofeek
};
console.log(name); // Uncaught Reference Error: name

*Function Scope*
All scopes in javascript are created with Function Scope **only**, they are not created by **for/while** loop or expressions like **if or switch.** Each new function is a new scope.

// Scope X
let myScope = function(){
    // Scope Y
    let myNewScope = function(){
        // Scope Z
    };
}

*Lexical Scope*
A function within another function has access to the scope in the outer function. This is known as **Lexical Scope or Closure.**

// Scope X
let myScope = function(){
    // Scope Y
    let name = 'Taofeek'; // defined in Scope Y
    let myNewScope = function(){
        // Scope Z: _name_ can be accessed here.
    };
}

    // Another example

    const myScope = function(){
        let name = 'Taofeek';
        const myNewScope = function(){
            console.log('I am ' + name);
        }
        console.log(name);
        myNewScope(); // call function
    }

Any variables/objects/functions defined in its parents scope, are available in the scope chain. For instance:

let name = 'Taofeek';
let myScope = function(){
    // name is available here.
    let myScope2 = function(){
        // name is available here.
        let myscope3 = function(){
            // name is also accessible here.
        };
    };
}

*Lexical Scope* does not work backward:

// name = undefined
let myScope = function(){
    // name = undefined
    let myScope2 = function(){
        // name = undefined
        let myscope3 = function(){
            name = 'Taofeek' // name is locally defined here and can be accessed.
        };
    };
}

**Scope Chain**

The link which a local scope maintains with the outer scope is called **Scope Chain.**


**Closure**
A closure is a method that allows that a function within a local scope is returned so that they are available to the parent scope.

let sayHi = function (name){
    let message = 'Hi, ' + name;
    return function(){ 
        console.log(message);
    };
};
// calling thefunction alone will do nothing as it returns a function.
sayHi('Taofeek'); // nothing happens, no errors, just silence...