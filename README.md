# Express App Using OMDb API
A very simple app that has a search form and shows results.
No styling or templates in this example.

## What we'll do:

* Use the `request` module inside a route
* Use `JSON.parse(body)` to convert string to JS object
* Create a dynamic URL for our `request`'s API.

## About OMDb API

- Sign up and get your API key.
- Use the docs to play around and construct your own search query!
- A sample query...
  ```
  http://www.omdbapi.com/?i=tt5726616&apikey=57483d04&plot=full&tomatoes=true
  ```

1. Install dependencies:
  - `npm init`
  - `npm install express request ejs --save`
  - **body-parser** is **not needed** here, as its **only needed to read HTTP POST data!**.


2. In the route where we have the form:  
  - `method="GET"` the search term from the form input to be used as a variable in the request API like this:
    ```
    var query = request.query.<search>
    ```
  - where `<search>` is the name in your input's name.
  - append the `query`variable at the end of your request API, like this:
  ```
  http://www.omdbapi.com/?s=' + query + &apikey=57483d04
  ```

  **OR**

  - create a url variable to be passed on the request API like this:
    ```
    var url = `http://www.omdbapi.com/?s=${query}&apikey=57483d04`
    ```
  - then pass the `url` to request.   
