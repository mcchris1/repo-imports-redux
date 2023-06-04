![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# Big O && Intro to Algorithms!

## Learning Objectives

- Intro to Algorithms
  - What is an algorithm?
  - What are the benefits to using algorithms?

- Big O
  - What is _Big O_ notation?
  - How do I find the _Big O_ of an algorithm?
  - What are the easy to recognize patterns?
  - What are the pitfalls of _Big O_?


## Intro to Algorithms

#### What is an algorithm?
  > A step-by-step set of instructions to solve a problem for any valid input.

  We've been using algorithms, in one way or another, for a majority of this class so far! 
  If you've used a nested `for` loop, you've used an algorithm before.

#### What is efficiency?
  > A measure of time and space (processing time and memory). 

  When developers write code, they need to measure how taxing a given program will be on a machine. The faster and lighter a program is, the less machine work needs to be done.

#### Why algorithms?

Algorithms are important because:
- Understanding algorithms let us reuse knowledge from the field.
- Better-performing algorithms can enhance the user experience by decreasing wait times.
- Better-performing algorithms can save companies money by reducing equipment needs.
- Algorithms and algorithm analysis are an important part of the shared language developers use to talk about programs (especially in **INTERVIEWS!**).
## Big O?

- _Big O_ is used to approximate how long an algorithm takes to run.
> More formally, Big O can be used to describe the runtime of an algorithm as input grows.
- We will mostly be looking for the __WORST CASE SCENARIO__ for each algorithm.
- In addition, we're looking not at a specific number, but an _order of magnitude_ (represented by the letter _n_).
> We do this because as _n_ gets significantly large, the other terms become insignificant.


### Common Big O Values


| Input Size (n) |	O(1) |	O(log(n))	 |  O(n)	| O(nlog(n))	| O(n<sup>2</sup>) |
| :-------------: |	:-------------: |	:-------------:	 | :-------------:	| :-------------:	| :-------------: |
| 1	| 1	 | 0 | 1 |	1 |	1 |
| 8	| 1	|  3	| 8 | 24 | 64  |
| 30	 | 1 | 	~5	 | 30 | 150 | 	900 |
| 500	 | 1 | 	~9	 | 500 | 4500 | 250,000 |
| 1000 | 	1 | 	~10	 | 1000	 | 10,000 | 	1,000,000 |
| 16,000	 | 1	 | ~14	 | 16,000	 | 224,000  | 	256,000,000 |
| 100,000	 | 1	 | ~17	 | 100,000	 | 1,700,000  | 	10,000,000,000 |


Observe how curves for different complexities compare to each other.
- O(1) is a totally flat line. It's constant no matter how much data is given to it.
- O(log(n)) goes up, then nearly flattens out.
- O(n) goes up and right in a straight line.
- O(n<sup>2</sup>) starts to spike up sharply as input size gets large.



![time complexity graph from Yaacov Apelbaum, apelbaum.wordpress.com](https://apelbaum.files.wordpress.com/2011/10/yaacovapelbaumbigoplot.jpg)

> _fig. 1: how the number of operations (time) grows with the number of input elements for various orders of complexity._


Big O notation gives an upper limit for how long or how much space an algorithm could take. We try to get estimates that are close to what time or space will actually be required, but Big O is a guarantee that that the resources it takes to complete the algorithm, as inputs grow infinitely large, will be less than or equal to some constant multiple complexity of an algorithm.

> Note: Those constant multiples can get *really* large, meaning sometimes an O(n) algorithm will run faster than an O(log(n)) algorithm.

### Rules for Evaluating Complexity

How can you predict the complexity of a given algorithm? We can look for certain
features to help us characterize it.

-   Think of a name (often `n`) for the size of the input. If you have multiple inputs, like `arr1`, `arr2`, assign different names for each one (size of `arr1` is `n`; size of `arr2` is `m`).
-   For consecutive statements, add the complexities of each.
-   For branching statements (`if/else`), use the complexity of the worse
    branch.
-   For loops, multiply the maximum number of times the loop can run by the complexity of the work inside the loop.
-   Simplify: eliminate constant multiples within parentheses (`O(2n)` -> `O(n)`), constant multiples of a single big-o family (`8*O(n)` -> `O(n)`), and entire smaller terms (`O(n) + 3*O(1)` -> `O(n)`).  Don't remove smaller terms that use a different name for the input size: `O(n) + O(log(m))` doesn't simplify.

#### Examples:

Let's get the sum of two numbers.

```javascript
const sum = (a, b) => {
  return a + b;
}
```

<details>
  <summary>What's the Big O?:</summary>
O(1), because it always has the same (constant) runtime.
</details>

Let's log all the items in a nested array, and then log the index of each sub-array.

```javascript
const logNestedArray = nestedArray => {
  for (let n = 0; n < nestedArray.length; n++) {
    for (let m = 0; m < nestedArray[n].length; m++) {
      console.log(array[n][m]);
    }
  }
  for (let n = 0; n < nestedArray.length; n++) {
    console.log(`${nestedArray[n]} is at index ${n}`);
  }
}
```
<details>
  <summary>What's the Big O?:</summary>
O(nm) + O(n), simplified to O(nm)
</details>

### Orders of Magnitude: Turn and Talk!
- Work with the person next to you and find the most significant magnitude for each:
  1. 5n^3
  2. 5n^2 + 2n + 10
  3. 1000n
  4. 2n + 2
  5. 10n^3 + 2n^2 + n + 125
  6. 1 
  7. 10,000

#### O(1) (constant time)

To say an algorithm takes constant (or `O(1)`) time means: no matter how big the input(s) are, the computer will do basically same amount of work to perform the algorithm on them.

We'll consider most mathematical operations to be `O(1)`: `+`, `-`, `*`, `/`, `%`, `<`, `>`. `==`, `===`.  (This assumes that the numbers are all with some limited size like 32-bit numbers or 64-bit numbers.)

Assignment (`=`), `return`, and accessing a value in an array (`arr[4]`) or object (`obj['a']`) are other examples of steps that are considered `O(1)`.

```javascript
const isFirstUndefined = numArray => {
  let first = numArray[0];
  return first === undefined;
}

const average = (a,b) => {
    return (a+b)/2;
}
```

> Note that the algorithms above each perform more than one `O(1)` step. The key factor that makes the algorithms `O(1)` is that the amount of calculations doesn't depend on the size of the inputs `numArray`, `a`, or `b`.

#### O(n) (linear time)

To say an algorithm is linear or `O(n)` means the resources required grow proportionally to the size of the input.

Algorithms that process each input at least once will take at least **O(n)** time.  Loops are a common example.  

```javascript
const addAll = numArray => {
  let sum = 1;                                // O(1)
  for (let i = 0; i < numArray.length; i++){  // n times:
    sum += numArray[i];                       // O(1)
  }
  return sum;                                 // O(1)
}
```

Following our rules for evaluating complexity, the time complexity of `addAll` is `O(1) + n*O(1) + O(1)`. You might be tempted to call this `O(n) + 2*O(1)`, but don't forget to  simplify!  

Nested for loops are a common example of ___ (what) operation?


```javascript
const addAlltoAll = numArray => {
  let sum = 1;                                  // O(1)
  for (let i = 0; i < numArray.length; i++) {   // n times:
    sum += numArray[i];
    for (let j = 0; j < numArray.length; i++) { // n times:
      sum += numArray[j];
    }
  }
  return sum;                                   // O(1)
}
```
<details><summary>Answer:</summary>
 Simplifies to O(n<sup>2</sup>)
</details>

#### O(log(n)) (logarithmic time)

Any algorithm which cuts the problem size in half each at each step is logarithmic or `O(log (n))`.

These algorithms take longer for larger inputs, but the rate of increase is very slow compared to a lot of other possibilities.

<details><summary>*Optional: Can you think of an example of an `O(log (n))` algorithm?*</summary>

An common example is finding an item in a sorted list with a balanced search tree or a binary search! Here's some pseudocode:

```javascript
const binary_search = (array, value, low = 0, high = array.size - 1) => {
  // if high and low overlap, nothing was found.
  if (high < low) return false;
  // determine the middle element.
  let mid = low + ((high - low) / 2);
  // split the result in half and search again recursively until we succeed.
  if (array[mid] > value) {
    return binary_search(array, value, low, mid-1);
  } else if (array[mid] < value) {
    return binary_search(array, value, mid+1, high);
  } else {
    return mid; // found!
  }
}
```

</details>

#### O(n log(n))

You'll usually see `O(n log(n))` in "divide and conquer" algorithms that cut a problem into halves, *solve both halves*, and combine the results into a final solution.  This `O(n log(n))` complexity is famous for being the fastest possible time complexity of sorting algorithms on unrestricted inputs.

Of course, this would also be the time complexity of a loop that ran `n` times and did  `O(log(n))` work inside.

We'll be looking at this more once we get to __sorting functions__.

#### [There are other families too!](https://en.wikipedia.org/wiki/Big_O_notation#Orders_of_common_functions)

## Exercises!
Work with your partner and find the worst case time-complexity of each of these algorithms:
#### #1

```javascript
const wordOccurrence = (word, phrase) => {
  let result = 0;
  const array  = phrase.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (word.toLowerCase() === array[i].toLowerCase()) {
      result += 1;
    }
  }
  return result;
}
```
<details><summary>Answer:</summary>
 Simplifies to O(n)
</details>

#### #2

```javascript
const bubble_sort = list => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j  = 0; j < list.length - 2; j++) {
      if (list[j+1] < list[j]) {
        const temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
      }
    }
  }
  return list;
}
```
<details><summary>Answer:</summary>
 Simplifies to O(n<sup>2</sup>)
</details>

#### #3
```javascript
const factorial = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}
```
<details><summary>Answer:</summary>
 Simplifies to O(n)
</details>

#### #4

```javascript
const bobIsFirst = people => {
  return people[0] == 'bob';
}
```
<details><summary>Answer:</summary>
 Simplifies to O(1)
</details>

#### #5

```javascript
const isPalindrome = input => {
  const stack = [];
  let output = "";
  for (let i = 0; i < input.length; i++){
    stack.push(input[i]);
  }
  while (stack.length) {
    output += stack.pop();
  }
  return output == input;
}
```
<details><summary>Answer:</summary>
 Simplifies to O(n)
</details>

#### #6

```javascript
const addAll = numArray => {
  let sum = 1;                                
  for (let i = 0; i < 50; i++){  
    sum += numArray[i];                       
  }
  return sum;                                 
}
```
<details><summary>Answer:</summary>
 Simplifies to O(1)
</details>

#### #7
```javascript
const sumOfDivisors = n => {
  let result = 0;
  let i = 1;
  while (i < n) {
    if (n % i == 0) {
      result += i;
    }
  }
  return result;
}
```
<details><summary>Answer:</summary>
 Simplifies to O(n)
</details>

#### #8
```javascript
const printAllNumbersThenSumPairs = numArray => {
  numArray.forEach(num => console.log(num));
  numArray.forEach((num, index)=>{
    if (index < numArray.length - 1) {
      console.log(num + numArray[index+1]);
    }
  });
}
```
<details><summary>Answer:</summary>
 Simplifies to O(n)
</details>

#### #9
```javascript
const isPrime = num => {
  if (num == 1 || num == 2) {
    return false;
  }
  for (let i = 2; i < num - 1; i++){
    if (num % 1 == 0) {
      return false;
    }
  }
  return true;
}
```
<details><summary>Answer:</summary>
 Simplifies to O(n)
</details>
