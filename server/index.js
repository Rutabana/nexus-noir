require('dotenv').config();
const express = require('express');
const cores = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL conneciton pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'my_mysql_user',
    password: process.env.DB_PASSWORD || 'your_mysql_password',
    database: process.env.DB_NAME || 'your_database_name',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// A test route to ensure connection works
app.get('/', (req, res) => {
    pool.query('SELECT NOW() AS now', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error', details: err });
        }
        res.json({ message: 'Hello from Express!', now: results[0].now });
    });
});

// Example POST route for creating a new blog post
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    // Example query, adjust based on your schema
    pool.query(
        'INSERT INTO post {title, content) VALUES (?, ?)',
        [title, content],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Insert error', details: err });
            }
            res.status(201).json({ message: 'Post created', postId: results.insertId });
        }
    );
});

const PORT = process.env.PORT || 4000;
app.listen(POST, () => {
    console.log(`Express server running on port ${PORT}`);
});