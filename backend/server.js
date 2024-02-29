// Import necessary packages
const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); //


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root@localhost',
  password: '123456Yes',
  database: 'SubscribeButton'
});

const app = express();


app.use(express.json());


app.use(cors());


app.post('/subscribe', (req, res) => {

  const { name, email } = req.body;

  const sql = 'INSERT INTO subscribers (name, email) VALUES (?, ?)';

  pool.query(sql, [name, email], (error, results) => {
    if (error) {
      console.error('Error inserting subscriber:', error);
      res.status(500).json({ error: 'An error occurred while inserting data' });
    } else {
      console.log('Subscriber added successfully');
      res.status(200).json({ message: 'Subscriber added successfully' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
