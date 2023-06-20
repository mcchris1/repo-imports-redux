# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# Build a Author JSON API

Your task is to create seed data for a json api using MongoDB and Mongoose.

Your app should include the following:

- a seed file to create seed data in your database

Let's create the package.json file!

```sh
npm init -y
```

Add the ability to use `imports` in your package.json file:

```
"type": "module"
```

We now need to install the necessary npm package that we will be using:

```sh
npm install mongoose
```

You can configure your package.json to include the start and custom seed scripts:

package.json
```sh
  "scripts": {
    "start": "node index.js",
    "db:seed": "node seed/data.js"
  },
```

Let's setup the folder and file structure for our server application:

```sh
mkdir db models seed
touch db/connection.js models/author.js models/book.js seed/data.js .gitignore
```

Don't forget to add the node_modules folder to your .gitignore!

.gitignore
```sh
node_modules
.DS_Store
```

Okay, let's get started by setting up the MongoDB connection configuration by using the Mongoose library:

db/connection.js
```js
import mongoose from 'mongoose'

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  'mongodb://127.0.0.1:27017/authorsDevDatabase'

// Setup connection for MongoDB
// https://mongoosejs.com/docs/connections.html#connections
mongoose
  .connect(MONGODB_URI)
  .catch((error) => console.error('Error connecting to MongoDB: ', error.message))

// Listen to MongoDB events
// Learn more: https://mongoosejs.com/docs/connections.html#connection-events
mongoose.connection.on('disconnected', () => console.log(`Disconnected from MongoDB!`))

// Listen to any errors while connected to MongoDB
// Learn more: https://mongoosejs.com/docs/connections.html#error-handling
mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

// Export the connection
export default mongoose.connection
```

We now need to define what an author and a book looks like in our database. We can do this by defining a schema:

models/book.js
```js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String },
  type: { type: String },
});

export default BookSchema;
```

models/author.js
```js
import mongoose from "mongoose";
import Book from "../models/book.js";
const Schema = mongoose.Schema;

const Author = new Schema(
  {
    firstName: {type: String},
    lastName: {type: String},
    nationality: {type: String},
    birthYear: {type: Number},
    books: [Book],
  },
  { timestamps: true }
);

export default mongoose.model("authors", Author);
```

Now that we have a "blueprint" for what a blog post looks like in our database, we can now create some authors:

seed/data.js
```js
import db from "../db/connection.js";
import mongoose from "mongoose";
import BookSchema from "../models/book.js";
import Author from "../models/author.js";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  let Book = mongoose.model("books", BookSchema);

  const book1 = new Book({
    title: "The Great Gatsby",
    type: "Fiction",
  });

  await book1.save();

  const book2 = new Book({
    title: "A Brief History of Time",
    type: "Non-Fiction",
  });

  await book2.save();

  const authors = [
    {
      firstName: "F. Scott",
      lastName: "Fitzgerald",
      nationality: "United States",
      birthYear: 1896,
      books: [book1],
    },
    {
      firstName: "Stephen",
      lastName: "Hawking",
      nationality: "United States",
      birthYear: 1942,
      books: [book2],
    },
  ];

  await Author.insertMany(authors);
  console.log("Created authors!");

  // close database connection. done.
  db.close();
};

insertData();

```

Run the seed file:

```sh
node seed/data.js
```

Or use the custom command:

```sh
npm run db:seed
```


Confirm that the MongoDB database (authorsDevDatabase) along with the two authors got created in MongoDB by using MongoDB Compass or Mongo Shell to check.
