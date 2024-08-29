# Book Store API

This is a simple Node.js API for managing a book store. It allows you to perform various operations such as getting a list of books, searching for books by ISBN, author, or title, managing user registrations and logins, and handling book reviews.

## Features

- Get the list of all books
- Get a book by ISBN
- Get all books by a specific author
- Get all books by a specific title
- Get reviews for a specific book
- Register a new user
- Login as a registered user
- Add/modify a book review
- Delete a book review by a specific user
- Get all books using an async callback function
- Search for a book by ISBN using Promises
- Search for books by author using Promises
- Search for books by title using Promises

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/bhaskarreddygurram/EDXProject.git

  Navigate to the project directory:
  cd EDXProject

Install the dependencies:

Usage
Start the server:

The server will be running at http://127.0.0.1:8000/.

API Endpoints

 -  Get the list of all books
 -  URL: /books
 -  Method: GET
 -  Response: JSON array of all books

Get a book by ISBN
 -  URL: /books/isbn/:isbn
 -  Method: GET
 -  Response: JSON object of the book with the specified ISBN
  
Get all books by a specific author
 -  URL: /books/author/:author
 -  Method: GET
 -  Response: JSON array of books by the specified author
  
Get all books by a specific title
 -  URL: /books/title/:title
 -  Method: GET
 -  Response: JSON array of books with the specified title
  
Get reviews for a specific book
 -  URL: /books/review/:isbn
 -  Method: GET
-   Response: JSON array of reviews for the book with the specified ISBN
  
Register a new user
 -  URL: /register
 -  Method: POST
 -  Request Body: JSON object with username and password
 -  Response: JSON object with a success message and user ID
  
Login as a registered user
 -  URL: /login
 -  Method: POST
 -  Request Body: JSON object with username and password
 -  Response: JSON object with a success message and user ID
  
Add/modify a book review
 -  URL: /books/review/:isbn
 -  Method: POST
 -  Request Body: JSON object with userId, rating, and comment
 -  Response: JSON object with a success message
  
Delete a book review by a specific user
 -  URL: /books/review/:isbn
 -  Method: DELETE
 -  Request Body: JSON object with userId
-   Response: JSON object with a success message
  
Get all books using an async callback function
 -  URL: /books/async-books
 -  Method: GET
 -  Response: JSON array of all books
  
Search for a book by ISBN using Promises
 -  URL: /books/promise-isbn/:isbn
 -  Method: GET
 -  Response: JSON object of the book with the specified ISBN
  
Search for books by author using Promises
 -  URL: /books/promise-author/:author
 -  Method: GET
 -  Response: JSON array of books by the specified author
  
Search for books by title using Promises
  URL: /books/promise-title/:title
  Method: GET
  Response: JSON array of books with the specified title
  
License This project is licensed under the MIT License.
