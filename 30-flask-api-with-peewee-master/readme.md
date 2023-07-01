[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Flask API
What do LinkedIn and Pinterest have in common? They're both high on user interactivity and handle large server loads. They also use Flask!

Flask is to Python what ExpressJS is to Node. In this lesson we'll learn how to use Flask to make a basic API.


## Objectives
By the end of this,  developers should be able to:
- Set up a virtual environment with `Pipenv`
- Write and run a basic Flask API
  - Setting up routes
  - Handling JSON
  - Using Peewee


## Virtual Environments
We don't want to install project dependencies globally, including Python itself. To work around that we can create *virtual environments*.

There are many different common ways to create virtual environments with Python. We'll be using the most modern (and straightforward) approach: [Pipenv](https://github.com/pypa/pipenv). You may also see other people using *virtualenv* and *venv*.


### Install Pipenv
Install Pipenv with either Pip or Homebrew. We recommend Pip.
 - Pip: `pip3 install pipenv`
 - Homebrew: `brew install pipenv`

### Create a Virtual Environment
You'll create a new virtual environment every time you make a new project.

To create a virtual environment, you can run `pipenv install`. If you then run
an `ls`, you'll see that a `Pipfile` and `Pipfile.lock` have been created.

Pipfiles use [TOML](https://github.com/toml-lang/toml) syntax. This file keeps track of dependencies like NPM does with `package.json` in JSON. Because we didn't install any pakcages, the `Pipfile` is pretty bare:

```TOML
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]

[dev-packages]

[requires]
python_version = "3.9"
```

### Installing Dependencies
Since we're going to be using Peewee, Flask, and PostgreSQL for this project,
we'll need to install those packages. We could install each individually by
running `pipenv install flask`, then `pipenv install peewee`, then `pipenv
install psycopg2-binary` but _WHO WANTS TO TYPE ALL OF THAT???_

We can add all three by running `pipenv install peewee flask psycopg2-binary`.
If you check the contents of the Pipfile now, you'll see that the packages have
been updated to look like this:

```TOML
[packages]
peewee = "*"
flask = "*"
psycopg2-binary = "*"
```

Just as `npm install` installs the dependencies listed in the directory's
`package.json`, running `pipenv install` will check the `Pipfile` and install the
listed packages.

### Use the Virtual Environment
Just because we've created a virtual environment doesn't mean we're using it. 
You'll switch in and out of it on the command line like you would if you were switching users or connection to a server. 

First, let's see what executable the `python3` command references with `which python3`.

Next try switching to a virtual environment with `pipenv shell`.

Now check out which Python we're running: `which python3`. This should refer to a different directory.
Exit out of it with `exit`.


## Flask
Let's create a trivial Flask app. We'll note the similarities between Flask and ExpressJS.

### Flask Hello World
In a file named `app.py`:
```python
# Import the 'Flask' class from the 'flask' library.
from flask import Flask

# Initialize Flask
# We'll use the pre-defined global '__name__' variable to tell Flask where it is. 
# More on this below.
app = Flask(__name__)

# Define our route
# This syntax is using a Python decorator, which is essentially a succinct way to wrap a function in another function.
@app.route('/')
def index():
  return "Hello, world!"

# Run our application, by default on port 5000
app.run()
```

> Fully understanding how `__name__` works would take  a bit more time than we
have but suffice it to say, you need `__name__` to create a Flask instance. If
you'd like a full explanation of what it is and how it works in relation to
flask, check out [this
article](https://codefather.tech/blog/python-__name__-flask/)

You can run the application from the command line with `python3 app.py`. 
Make sure you are in your virtual environment!

### Express Hello World
Here's how the equivalent program would be written with Node and ExpressJS
```javascript
// Import the 'Express' class from the 'express' library
const express = require('express')

// Initialize Express
const app = express()

// Define our route
app.get('/',
  (request, response)=> {
    response.send("Hello, world!")
})

// Run our application on port 5000
app.listen(5000)
```
You'd run this with `node app.js`.

### Set `debug` and `port`
By default Flask will run on port 5000. We can pass in an explicit port into the Flask `run` method using Python's *named parameters*:
```python
app.run(port=9000)
```
We can also specify "Debug" mode which will improve logging and automatically restart the server on file changes:
```python
app.run(port=9000, debug=True)
```

## Routes

### Variable Path Names
We can use variables in path names with Flask routes.
```python
@app.route('/say-hello/<name>')
def say_hello(name):
  return f"Hello, {name}!"
```

### Requests
We can differentiate between different HTTP request with the `request` module

First, import the module:
```python
from flask import request
```

Now we can use it in our routes. Note that we use the `methods` named parameter in the `route` method to limit the route to specfic methods.
```python
@app.route('/endpoint', methods=['GET', 'PUT', 'POST', 'DELETE'])
def endpoint():
  if request.method == 'GET':
    return 'GET request'

  if request.method == 'PUT':
    return 'PUT request'

  if request.method == 'POST':
    return 'POST request'

  if request.method == 'DELETE':
    return 'DELETE request'
```

### Sending JSON
We use the `jsonify` library to work with JSON in Flask. As you might imagine, it works well with dictionaries.

First, import the `jsonify` function:
```python
from flask import jsonify
```
An example route that uses JSON:
```python
@app.route('/get-json')
def get_json():
  return jsonify({
    "name": "Garfield",
    "hatesMondays": True,
    "friends": ["Sheldon", "Wade", "Orson", "Squeak"]
  })
```

## Try it Out!
Try creating a Flask app that has two different endpoints.
Both endpoints should return different strings.


## Using Flask with Peewee
We can make a RESTful CRUD app by combining Flask's routing with Peewee's database access.
We'll make use of both `model_to_dict` and `dict_to_model` from Peewee's Playhouse. 

```python
from flask import Flask, jsonify, request
from peewee import *
from playhouse.shortcuts import model_to_dict, dict_to_model

db = PostgresqlDatabase('people', user='postgres', password='', host='localhost', port=5432)

class BaseModel(Model):
  class Meta:
    database = db

class Person(BaseModel):
  name = CharField()
  age = IntegerField()

db.connect()
db.drop_tables([Person])
db.create_tables([Person])

Person(name='Raul', age=1000).save()
Person(name='Chris', age=2000).save()

app = Flask(__name__)

@app.route('/person/', methods=['GET', 'POST'])
@app.route('/person/<id>', methods=['GET', 'PUT', 'DELETE'])
def endpoint(id=None):
  if request.method == 'GET':
    if id:
        return jsonify(model_to_dict(Person.get(Person.id == id)))
    else:
        people_list = []
        for person in Person.select():
            people_list.append(model_to_dict(person))
        return jsonify(people_list)

  if request.method =='PUT':
    body = request.get_json()
    Person.update(body).where(Person.id == id).execute()
    return "Person " + str(id) + " has been updated."

  if request.method == 'POST':
    new_person = dict_to_model(Person, request.get_json())
    new_person.save()
    return jsonify({"success": True})

  if request.method == 'DELETE':
    Person.delete().where(Person.id == id).execute()
    return "Person " + str(id) + " deleted."

app.run(debug=True, port=9000)
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
