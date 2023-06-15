[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Form Events

We've worked with events on regular elements like links and buttons. That means
we have the basics down for working with events and forms. As we'll see in this
demo though, there are some special considerations and common gotchas that make
working with forms a little trickier.

That said, they're also a lot of fun!

## Prerequisites

- HTML and CSS (especially for making forms)
- JavaScript programming
- Working with the DOM and events
- Working with the Event Object

## Objectives

By the end of this, developers should be able to:

- Discuss which events are most relevant for working with forms
- Attach event listeners to forms and form elements

## Introduction

As we said in the intro, working with forms requires a little bit more
specialized knowledge about events and event listeners. Forms are a little
tricky to implement. But they're an extremely important part of the web and any
user interface.

## Form Events

When working with forms, there are three event types that we will use:

1. `submit`
1. `input`
1. `change`

We'll explore each one in more depth.

Enough talk! Let's build a form!

### Basic Form 

Open your text editor \*\****cough***\*\*vimisthebest\*\****cough***\*\* and
make a new HTML file and link it to a JS file. Here's some starter code for
the HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Forms!</title>
  </head>
  <body>
    <script src="form.js"></script>
  </body>
</html>

```

Just to be certain that our file's are properly linked, let's throw a
simple `console.log` in our JS file: 

```js
console.log('it works!')
```
Now that that's out of the way, let's build a site login form, something
you've seen a million times before. Edit the body of your HTML to look like this:

```html
  <body>
    <h1>Welcome to Chris' World</h1>
    <h3>The coolest social media site EVER</h3>
    <form id="form">
      <p>
        <label for="username">Username:</label>
        <input type="text"
               name="username"
               id="username"
               placeholder="Enter your username!"/>
      </p>
      <input type="submit" value="Sign Up">
    </form>
    <script src="forms.js"></script>
  </body>

```

We've got two important kinds of elements inside of our `form`. Let's talk about them in
reverse order!

- #### `input`
> The `<input>` element is one of the most powerful and complex in all of
HTML due to the sheer number of combinations of input types and attributes' -
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

If it is a way for the user to enter information inside of a form, it's probably
an input element! 

Here we see examples of two `type`s of input: `text` and `submit`. 

Our `text` type input has `name` and `placeholder` attributes.
The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name)
is important in that it's used internally by the `form` to manage data. For
example, our text input could now be accessed via JavaScript with the following
code:

```js
document.querySelector('form').elements.username
```

> Weird note: The array-like property of a `form` is an [`HTMLFormControlsCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection), which is a child of `HTMLCollection`. Using its `.namedItem()` method (as we did above) will return a single form element whose name OR id is a match. If there are multiple matches, it throws them into another array-like object!

Our `submit` type input has a
[value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value)
attribute. Using `value` like this sets the initial... value... of an
input. Keep `value` in mind because that's what we're going to use to pull
information out of our form later. 

> Note!: As a best practice, we want to use a `submit` `input` rather than a `button` element. In some browsers, using a `button` doesn't fire off the form's `submit` event when it is clicked!


## The `submit` Event

The `submit` event gets fired when a user submits a form.

> No one said this was rocket science.

You can manage the `submit` event purely with HTML but it's not very robust.
Let's use our JS to give it some functionality! Add this to your form.js:

```js
const form = document.getElementById('form')

const handleSubmit = function(event) {
  console.log('submitted')
}

form.addEventListener('submit', handleSubmit)
```

We're grabbing our form by ID, then setting up an event listener that's
waiting for the form's `submit` event. 

**The `form` emits the submit event, not the button that the user clicks on
inside of the form. Add your listener to the `form`!**

<details>
  <summary>Should work, right?</summary>
  <h1>WRONG! YOU GREAT FOOL!</h1>
</details>
<br/>

By default, a form has a built-in `action` attribute that will submit the data to some URL and reload the page (or
just reload the page if you don't provide a URL). To stop that from
happening, we need to include a
[`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault):

```js
const handleSubmit = function(event) {

  // stops the reload!
  event.preventDefault()

  console.log('submitted')
}
```

## The `input` Event
So far, we've seen the `click` and `submit` event listeners. The
[`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event
is another that fires off whenever the value of an input changes.

Let's add an event listener and handler to our username input:

```js
// using e, a query selector, and an arrow function for funsies
const username = document.querySelector('#username')

const handleInput = (e) => {
  console.log('The input: ' + e.data)
  console.log('The current value of #username: ' + e.target.value)
}

username.addEventListener('input', handleInput)
```

## The `change` Event
The
[`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
event is fired off whenever a change is made permanent or 'committed' by the
user. Let's add another input to see what that means in practice. Add this
beneath the username input in your HTML: 

```html
<p>
  <label for="password">Password:</label>
  <input type="password"
         name="password"
         id="password"
         placeholder="Enter your password!"/>
</p>
```

And add this to your JS: 
```js
const handleChange = function(event) {
  // grab the name of the event's target for use in our string
  console.log(`${event.target.name} has been changed!`)
}

// using .forEach on the NodeList made by our querySelector to add the listener
// to all inputs inside the form
document.querySelectorAll('#form input').forEach(input =>
  input.addEventListener('change', handleChange))
```

As you can see, the `change` doesn't fire off every time you type something in.
Instead, it fires whenever a change has been made ***and*** the input used loses
focus.

## Working with Form `Value`s

We work with forms because we want data from users (and forms are the best way
to get that data). So, how do we access that data in JavaScript?

The `form` DOM node in JavaScript will be the event target for a `submit` event.

The `form` DOM node also has an array property called `elements` that contains a node
for each input element in the form.

Each one of those `elements` in that array has a `value` property, and that's where we'll find what the user has input. 

Let's make the following changes to our `handleSubmit` function to see it
in action:

```js
const handleSubmit = function(event) {
  event.preventDefault()

  let elements = event.target.elements

  for(let i = 0; i < elements.length; i++) {
    console.log(`${elements[i].name}: ${elements[i].value}`)
   }
}
```

Lets finish off our amazing social media website by implementing a
password validator! Make the following changes to your JS:

```js
const password = "CoolChris"

const handleSubmit = function(event) {
  event.preventDefault()

  let elements = event.target.elements
  /*
  for(let i = 0; i < elements.length; i++) {
    console.log(`${elements[i].name}: ${elements[i].value}`)
   }
   */

  if (elements.password.value === password) {
    console.log('Come on in!')
  } else {
    console.log('Sorry, wrong password!')
  }
}
```

As you can see, once we've grabbed the values from our form, we can do whatever
we like with it in our JS! If you need it, the final code (without comments)
is included in this repo.
