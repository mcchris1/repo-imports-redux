[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Context

Now that we have learned all about objects, we'll talk about a concept in
JavaScript called **context**. Context determines which object "owns" a function
while it's being invoked. With context, we'll see how all function invocations
are always attached to an object which we can access via the keyword `this`.
We'll learn how to use `this` on our own objects and how to alter the context of
`this`.

## Prerequisites

- Data Types
- Functions
- Scope
- Intro to Objects

## Objectives

By the end of this, developers should be able to:

- Explain Javascript 'context' and what the value of the `this` keyword refers to
- Explain what the default context of Javascript executing in the browser is
- Use the `this` keyword to set and retrieve a property on an object

## What is Context?

In Javascript, context tells us where functions are invoked.

In short, the **context is the object that a function is attached to**. We'll
see that context can change under certain circumstances.

Every time a Javascript function is called, a context is determined / set. That
context is always an object, and can be referenced in the function definition
using a special keyword in JS, `this`.

We use `this` similarly to the way we use pronouns in natural languages like
English and French. Say we write:

```
John bites an apple. The apple tastes good.
```

We can also say it another way:

```
John bites an apple. This tastes good.
```

What does `this` refer to? The apple.

In a similar manner, we use the `this` keyword as a replacement for the subject
in question.

### `this` in an Object

Here's an example of the most common way context is determined for a function.
When a method is called on an object, that object becomes the context...

```js
let user = {
  fullName: "Geordi La Forge",
  sayName: function(){
    console.log(`My name is ${this.fullName}.`)
  }
}

user.sayName()
```

<details>
  <summary><strong>What does <code>this</code> represent here?</strong></summary>

  > Here the object that the method is being called on is `user`

</details>

### A Rule of Thumb

In general, `this` is probably the **parent** or enclosing item (item being
function or object)

- You're in an event listener function, in which case `this` is the thing that was clicked on.
- You're in another callback function, in which case `this` is probably the `window`.

- You've used `.bind(newThisValue)` to change the context manually.
    >The [.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method used to be a much more common thing with frameworks like React. Now there are better options but you still may see it used in older code.

If you're ever unsure what `this` is at a given point in your code:

```js
console.log(this)
```

When in doubt, log it out.

### 'Getting' Properties using `this`

```js
let user = {
  fullName: "Worf, Son of Mogh",
  favoriteDrink: "prune juice",
  sayName: function(){
    console.log(`My name is ${this.fullName}.`)
  },
  sayHello: function(){
    console.log(`Hi my name is ${this.fullName} and my favorite drink is ${this.favoriteDrink}.`)
  }
}

user.sayHello() // for this function invocation, `this` is `user`
```

### 'Setting' Properties using `this`

This feature allows not just 'getting' property info on objects, but also
setting properties. Consider this example:

```js
let user = {
  userName: "smellycat",
  isSignedIn: false,
  signIn: function() {
    this.isSignedIn = true
  },
  signOut: function() {
    this.isSignedIn = false
  }
}

user.signIn()
user.isSignedIn // => true
user.signOut()
user.isSignedIn // => false
```

*But what if we want more control?*

Because we've written a method to set the `isSignedIn` property, we can use that
method to provide more control. For example... what if we wanted to check
a user's password before letting them sign in?

```js
let user = {
  userName: "smellycat",
  password: "password1234",
  isSignedIn: false,
  signIn: function(pwd) {
    if(pwd === this.password) {
      this.isSignedIn = true
    }
  },
  signOut: function() {
    this.isSignedIn = false
  }
}

user.signIn("centralperk")
user.isSignedIn // => false
user.signIn("password1234")
user.isSignedIn // => true
user.signOut()
user.isSignedIn // => false
```

### 'Running' methods using `this`

We can also use `this` to reference and call other methods on the object.

```js
let user = {
  userName: "smellycat",
  password: "password1234",
  isSignedIn: false,
  signIn: function(pwd) {
    if(pwd === this.password) {
      this.isSignedIn = true
      this.greetUser()
    }
  },
  signOut: function() {
    this.isSignedIn = false
  },
  greetUser: function() {
    console.log(`Welcome back ${this.userName}!`)
  }
}

user.signIn("centralperk")
user.isSignedIn // => false
user.signIn("password1234")
// => Welcome back smellycat
user.isSignedIn // => true
user.signOut()
user.isSignedIn // => false
-
```

## Additional Resources

- [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- [Understand JavaScript’s “this”](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
