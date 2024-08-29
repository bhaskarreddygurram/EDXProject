const http = require('http');
const url = require('url');
const { v4: uuidv4 } = require('uuid');

const hostname = '127.0.0.1';
const port = 8000;

let books = [
  {
    isbn: '9780747532699',
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Philosopher\'s Stone',
    reviews: [
      { userId: 'user1', rating: 4.9, comment: 'Great book!' }
    ]
  },
  {
    isbn: '9780451524935',
    author: 'George Orwell',
    title: '1984',
    reviews: [
      { userId: 'user2', rating: 4.8, comment: 'A must-read!' }
    ]
  },
    {
        isbn: '9780141187760',
        author: 'George Orwell',
        title: 'Animal Farm',
        reviews: [
            { userId: 'user1', rating: 4.7, comment: 'A classic!' }
        ]
    },
    {
        isbn: '9780141439587',
        author: 'Jane Austen',
        title: 'Pride and Prejudice',
        reviews: [
            { userId: 'user2', rating: 4.6, comment: 'Wonderful!' }
        ]
    },
    {
        isbn: '9780140449334',
        author: 'Herman Melville',
        title:  'Mardi: And a Voyage Thither',
        reviews: [
            { userId: 'user1', rating: 4.5, comment: 'Great!' }
        ]
    },
    {
        isbn: "9780140449334",
        author: "Herman Melville",
        title: "Mardi: And a Voyage Thither",
        reviews: [
            { userId: "user1", rating: 4.5, comment: "Great!" }
        ]
    },
    {
        isbn: "9780142437179",
        author: "Herman Melville",
        title: "Moby-Dick",
        reviews: [
            { userId: "user2", rating: 5.0, comment: "A masterpiece." },
            { userId: "user3", rating: 4.0, comment: "A bit long, but worth it." }
        ]
    },
    {
        isbn: "9780143105954",
        author: "Fyodor Dostoevsky",
        title: "Crime and Punishment",
        reviews: [
            { userId: "user4", rating: 4.8, comment: "Profound and thought-provoking." },
            { userId: "user5", rating: 4.5, comment: "Dark but brilliant." }
        ]
    },
    {
        isbn: "9780679783275",
        author: "Leo Tolstoy",
        title: "Anna Karenina",
        reviews: [
            { userId: "user6", rating: 5.0, comment: "A tragic love story." },
            { userId: "user7", rating: 4.7, comment: "Beautifully written." }
        ]
    },
    {
        isbn: "9780140449266",
        author: "Homer",
        title: "The Iliad",
        reviews: [
            { userId: "user8", rating: 4.5, comment: "Epic in every sense." }
        ]
    },
    {
        isbn: "9780140449273",
        author: "Homer",
        title: "The Odyssey",
        reviews: [
            { userId: "user9", rating: 4.6, comment: "A timeless adventure." }
        ]
    },
    {
        isbn: "9780451524935",
        author: "George Orwell",
        title: "1984",
        reviews: [
            { userId: "user10", rating: 4.9, comment: "Chilling and relevant." },
            { userId: "user11", rating: 4.8, comment: "A must-read." }
        ]
    },
    {
        isbn: "9780140449181",
        author: "Virgil",
        title: "The Aeneid",
        reviews: [
            { userId: "user12", rating: 4.7, comment: "A powerful epic." }
        ]
    },
    {
        isbn: "9780140449105",
        author: "Dante Alighieri",
        title: "The Divine Comedy",
        reviews: [
            { userId: "user13", rating: 4.9, comment: "An incredible journey." },
            { userId: "user14", rating: 4.8, comment: "A spiritual masterpiece." }
        ]
    },
    {
        isbn: "9780140449471",
        author: "Ovid",
        title: "Metamorphoses",
        reviews: [
            { userId: "user15", rating: 4.6, comment: "A fascinating collection of myths." }
        ]
    },
    {
        isbn: "9780140449242",
        author: "Sophocles",
        title: "The Three Theban Plays",
        reviews: [
            { userId: "user16", rating: 4.8, comment: "Timeless tragedies." }
        ]
    },
];

let users = [
  { userId: 'user1', username: 'user1', password: 'password1' },
  { userId: 'user2', username: 'user2', password: 'password2' }
];

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  if (pathname === '/books' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(books));
  } else if (pathname.startsWith('/books/isbn') && method === 'GET') {
    const isbn = pathname.split('/')[3];
    const book = books.find(b => b.isbn === isbn);

    if (book) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(book));
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Book not found' }));
    }
  } else if (pathname.startsWith('/books/author/') && method === 'GET') {
    const author = pathname.split('/')[3];
    const authorBooks = books.filter(b => b.author === author);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(authorBooks));
  } else if (pathname.startsWith('/books/title/') && method === 'GET') {
    const title = pathname.split('/')[3];
    const titleBooks = books.filter(b => b.title === title);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(titleBooks));
  } else if (pathname.startsWith('/books/review/') && method === 'GET') {
    const isbn = pathname.split('/')[3];
    const book = books.find(b => b.isbn === isbn);

    if (book) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(book.reviews));
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Book not found' }));
    }
  } else if (pathname === '/register' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { username, password } = JSON.parse(body);
      const userId = uuidv4();
      users.push({ userId, username, password });

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'User registered successfully', userId }));
    });
  } else if (pathname === '/login' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { username, password } = JSON.parse(body);
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Login successful', userId: user.userId }));
      } else {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid credentials' }));
      }
    });
  } else if (pathname.startsWith('/books/review/') && method === 'POST') {
    const isbn = pathname.split('/')[3];
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { userId, rating, comment } = JSON.parse(body);
      const book = books.find(b => b.isbn === isbn);

      if (book) {
        book.reviews.push({ userId, rating, comment });
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Review added/Modified successfully' }));
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Book not found' }));
      }
    });
  } else if (pathname.startsWith('/books/review/') && method === 'DELETE') {
    const isbn = pathname.split('/')[3];
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { userId } = JSON.parse(body);
      const book = books.find(b => b.isbn === isbn);

      if (book) {
        book.reviews = book.reviews.filter(review => review.userId !== userId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Review deleted successfully' }));
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Book not found' }));
      }
    });
  } else if (pathname === '/books/async-books' && method === 'GET') {
    getBooksAsync((err, books) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(books));
      }
    });
  } else if (pathname.startsWith('/books/promise-isbn/') && method === 'GET') {
    const isbn = pathname.split('/')[3];
    getBookByISBN(isbn)
      .then(book => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(book));
      })
      .catch(err => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Book not found' }));
      });
  } else if (pathname.startsWith('/books/promise-author/') && method === 'GET') {
    const author = pathname.split('/')[3];
    getBooksByAuthor(author)
      .then(authorBooks => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(authorBooks));
      })
      .catch(err => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Books not found' }));
      });
  } else if (pathname.startsWith('/books/promise-title/') && method === 'GET') {
    const title = pathname.split('/')[3];
    getBooksByTitle(title)
      .then(titleBooks => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(titleBooks));
      })
      .catch(err => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Books not found' }));
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Async callback function to get all books
function getBooksAsync(callback) {
  setTimeout(() => {
    callback(null, books);
  }, 1000);
}

// Promise-based function to get book by ISBN
function getBookByISBN(isbn) {
  return new Promise((resolve, reject) => {
    const book = books.find(b => b.isbn === isbn);
    if (book) {
      resolve(book);
    } else {
      reject('Book not found');
    }
  });
}

// Promise-based function to get books by author
function getBooksByAuthor(author) {
  return new Promise((resolve, reject) => {
    const authorBooks = books.filter(b => b.author === author);
    if (authorBooks.length > 0) {
      resolve(authorBooks);
    } else {
      reject('Books not found');
    }
  });
}

// Promise-based function to get books by title
function getBooksByTitle(title) {
  return new Promise((resolve, reject) => {
    const titleBooks = books.filter(b => b.title === title);
    if (titleBooks.length > 0) {
      resolve(titleBooks);
    } else {
      reject('Books not found');
    }
  });
}