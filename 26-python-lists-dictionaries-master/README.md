[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python Lists and Dictionaries

## Prerequisites

- JavaScript Programming
- JavaScript Arrays
- Basic Python

## Objectives

By the end of this, developers should be able to:

- Work with lists and dictionaries in Python

## Lists & Collections

A list is an ordered collection of related values. The syntax is the same as
JavaScript arrays. However, in Python it's called a **list**.

```python
numbers = [1, 2, 3]
# => [1, 2, 3]

animals = ["dog", "cat", "horse"]
# => ["dog", "cat", "horse"]

animals[0]
# => "dog"

animals[1] = "elephant"
# => "elephant"

animals
# => ["dog", "elephant", "horse"]
```

## List Methods

Python provides us with an extensive library of list methods we can use to
traverse and manipulate lists.

- The Python
  [documentation](https://docs.python.org/3/tutorial/datastructures.html) for
  `List` is a great resource for learning more about these methods
- Can't go over them all, but chances are if you could do it in JavaScript then
  you can do it in Python.

### `.append()`, `.extend()`, and `.pop()`

- `.append()` inserts an item into the end of the list.
- `.extend()` merges a list with the current list.
- `.pop()` removes an item from the end of the list. You can also supply an index to
  `pop` to remove at that index.

You can think of them in comparison to these equivalent JavaScript methods:

| Python | JavaScript |
| ------ | ---------- |
| `append` | `push`   |
| `extend` | `concat` |
| `pop`    | `pop`    |

```py
numbers = [1, 2, 3, 4, 5]
# => [1, 2, 3, 4, 5]

numbers.append(6)
# => [1, 2, 3, 4, 5, 6]

numbers.append([1, 2, 3])
# => [1, 2, 3, 4, 5, 6, [1, 2, 3]]

numbers.extend([7, 8, 9])
# => [1, 2, 3, 4, 5, 6, [1, 2, 3], 7, 8, 9]

numbers.pop()
# => 9

numbers
# => [1, 2, 3, 4, 5, 6, [1, 2, 3], 7, 8]

numbers.pop(0)
# => [2, 3, 4, 5, 6, [1, 2, 3], 7, 8]
```

Python also has a few methods that JavaScript doesn't have:

### `list.insert(index, value)`

With `.insert()`, you can insert an item at a given position. The first argument
is the index of the element *before* which to insert, so `a.insert(0, x)` inserts at
the front of the list, and `a.insert(len(a), x)` is equivalent to `a.append(x)`.

```py
numbers = [3, 1, 5, 2, 4]

numbers.insert(2, 11)

# => [3, 1, 11, 5, 2, 4]
```

### `sorted()`

Organizes list values from lowest to highest. Numbers and strings.

```py
numbers = [3, 1, 5, 2, 4]
# => [3, 1, 5, 2, 4]

sorted(numbers)
# => [1, 2, 3, 4, 5]
```

Notice that the methods we've been looking at so far are inside of the data
type, like in JavaScript:

```py
numbers = [1, 2, 3, 4]
numbers.append(5)
# => [1, 2, 3, 4, 5]
```

But the `sorted` method is not part of the list:

```py
sorted(numbers)
# => [1, 2, 3, 4, 5]
```

Python is very well organized and very consistent across data structures. So
`sorted` actually works on any Python *sequence*, including strings, tuples, and
sets:

```py
message = 'hello world'
sorted(message)
# => [' ', 'd', 'e', 'h', 'l', 'l', 'l', 'o', 'o', 'r', 'w']
```

Coming from another language, this difference can seem inconsistent and
confusing at first. After a while, you'll appreciate the consistency and beauty
of it.

### `.remove()`

The `.remove()` method will remove an argument from a list. If the argument
appears multiple times in the list, it will just delete the first appearance.

```py
numbers = [3, 1, 2, 2, 4]
# => [3, 1, 2, 2, 4]

numbers.remove(2)
# => 2

numbers
# => [3, 1, 2, 4]
```

## Dictionary

A Python dictionary is an unordered collection, organized by key-value pairs.
A dictionary is very similar to a JavaScript object.

```py
sei_class= {
  "teacher": "Chris",
  "students": ["Yakko", "Wakko", "Dot"],
  "classroom": 6,
  "in_session": True,
  "schedule": {
    "morning": "Python Basics",
    "afternoon": "Python Labs"
  }
}
```

Accessing dictionary values:

```py
sei_class["teacher"]
# => "Chris"
```

Note that you can't do this, like you can in JavaScript!

```py
sei_class.teacher

# => AttributeError: 'dict' object has no attribute 'teacher'
```

Modifying dictionary values:

```py
sei_class["teacher"] = "C-Dog"
# => "C-Dog"
```

Nested values:

```py
sei_class["schedule"]["morning"]
```

## Dictionary Methods

Like lists, Python also provides us with a library of dictionary methods.
[Again, the Python documentation is a great
resource](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

### `.keys()`, `.values()`, `.items()`

`.keys()` will return a `dict_keys` structure with all the keys in the dictionary. Can easily
be translated to a list using `list()`.

```py
sei_class.keys()
# => dict_keys(['teacher', 'students', 'classroom', 'in_session', 'schedule'])

list(sei_class.keys())
# => ['teacher', 'students', 'classroom', 'in_session', 'schedule']
```

Note that `dict_keys` is not a list. It's a specific data type, so it doesn't
have all the same methods that lists have.

`.values()` will return a `dict_values` object of all the values in the
dictionary:

```py
sei_class.values()
# => dict_values(['Chris', ['Yakko', 'Wakko', 'Dot'], 6, True, {'morning': 'Python Basics', 'afternoon': 'Python Labs'}])
```

`.items()` will return a `dict_items` object where each key, value pair of the
dictionary is a [ tuple ](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences):

```py
dict_items([('teacher', 'Chris'), ('students', ['Yakko', 'Wakko', 'Dot']), ('classroom', 6), ('in_session', True), ('schedule', {'morning': 'Python Basics', 'afternoon': 'Python Labs'})])
```

## Ranges

In Python, you can use ranges to quickly generate lists of numbers.

```py
list(range(1, 6))
# => [1, 2, 3, 4, 5]
```

You can also use ranges in for loops!

```py
for i in range(1, 6):
  print(i)

# => 1
# => 2
# => 3
# => 4
# => 5
```

This is faster and more efficient than using a list because `range` creates
a generator - a function that returns the next item in the sequence every time
it is called. [Read more here](https://docs.python.org/3/tutorial/controlflow.html#the-range-function)

### Length

Python uses a special function called `len()` to get the length of different
data structures. You can use `len()` on any iterable type, which includes lists
and dictionaries.

```py
sei_class = {
  "teacher": "John",
  "students": ["Yakko", "Wakko", "Dot"],
  "classroom": 2,
  "in_session": True,
  "schedule": {
    "morning": "Python Basics",
    "afternoon": "Python Labs"
  }
}

len(sei_class)
# => 5
```

> Note that there is no array.length property!

## You Do: Data Collections Exercises

> 15 minutes exercise. 5 minutes review.

Complete the set of exercises in
[this repo](https://git.generalassemb.ly/sei-buffleheads/python-basics-exercises).

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
