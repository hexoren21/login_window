const express = require('express');
const path = require('path');
const app = express();

// Middleware for parsing request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Endpoint for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint for the login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Here you should add authentication logic
  // In this example, we're checking if the login credentials are "admin"/"password"
  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid login credentials.');
  }
});

// Listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
