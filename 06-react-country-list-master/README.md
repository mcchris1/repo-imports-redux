[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Instructions

1.  Fork and clone this repository into your `sandbox` directory.
1.  Change into the new directory with `cd react-country-list`.
1.  Install dependencies by typing `npm install`.
1.  Open the directory in VS Code with `code .`.
1.  Back in the Terminal, type `npm run start` to run your development server.

## React Country List

Use AJAX and the component life cycle methods to list all the countries in the
world using the [REST Countries](https://restcountries.com) API.

## Prerequisites

- React
- Components
- State and props
- The component life cycle methods

## Requirements

### Part 1: Build it (We do)

Make it so that when the page loads (`App.js`), a list of all the countries in
the world appears on the page. Use `fetch()` inside of `componentDidMount()` to
query the [REST Countries](https://restcountries.com) API.

Use the endpoint labeled `all` to get a list of every country and its
properties.

```
  https://restcountries.com/v3.1/all
```

Here's a sample response of one country:

```json
  {
    "name": {
      "common": "DR Congo",
      "official": "Democratic Republic of the Congo",
      "nativeName": {
        "fra": {
          "official": "République démocratique du Congo",
          "common": "RD Congo"
        },
        "kon": {
          "official": "Repubilika ya Kongo Demokratiki",
          "common": "Repubilika ya Kongo Demokratiki"
        },
        "lin": {
          "official": "Republiki ya Kongó Demokratiki",
          "common": "Republiki ya Kongó Demokratiki"
        },
        "lua": {
          "official": "Ditunga dia Kongu wa Mungalaata",
          "common": "Ditunga dia Kongu wa Mungalaata"
        },
        "swa": {
          "official": "Jamhuri ya Kidemokrasia ya Kongo",
          "common": "Jamhuri ya Kidemokrasia ya Kongo"
        }
      }
    },
    ... plus a whole lot more...
  }
]
```

### Part 2: Componentize it (You do)

- Create a `Country` component.
- Using this giant list of json data, render a `Country` component for each
  entry.
- Pass in the name of the country as a prop. Render the entire list of
  countries, each in their own component.

_NOTE:_ you might also choose to have a `CountryList` Container component in
addition to the `Country` Presentational component.

### Part 3: Clickify it (We do)

Add an event listener so that when a country is clicked, it makes another
request to search for the country by name. Using the response, display the
capital, currency code, and the name of the first language below the country
name.

Yes, we could just pass the entire object down as a prop and use it directly.
But let's pretend that we can't! Fun.

For this part we'll use the search by name api endpoint:

```
https://restcountries.com/v3.1/name/{name}

example:

https://restcountries.com/v3.1/name/armenia
```

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
