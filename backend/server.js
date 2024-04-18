const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());


const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456Yes',
    database: process.env.DB_NAME || 'mercedes',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Routes
app.get('/api/models/:modelName', (req, res) => {
    const modelName = req.params.modelName;
    console.log("model requested:", modelName);
    pool.query('SELECT * FROM models WHERE modelName = ?', [modelName], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'Model not found' });
        }
    });
});

app.get('/api/colors/:modelName', (req, res) => {
    const modelName = req.params.modelName;

    const query = `
        SELECT
            m.id AS modelId,
            m.modelName,
            GROUP_CONCAT(DISTINCT e.colorName ORDER BY e.colorName) AS ExteriorColors,
            GROUP_CONCAT(DISTINCT i.colorName ORDER BY i.colorName) AS InteriorColors
        FROM
            models m
        LEFT JOIN
            exteriorColors e ON m.id = e.modelId
        LEFT JOIN
            interiorColors i ON m.id = i.modelId
        WHERE
            m.modelName = ?
        GROUP BY
            m.id, m.modelName;
    `;

    pool.query(query, [modelName], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length > 0) {
            res.json({
                modelName: results[0].modelName,
                exteriorColors: results[0].ExteriorColors ? results[0].ExteriorColors.split(',') : [],
                interiorColors: results[0].InteriorColors ? results[0].InteriorColors.split(',') : []
            });
        } else {
            res.status(404).json({ error: 'Model not found' });
        }
    });
});

app.get('/api/models/details/:modelName', (req, res) => {
    const modelName = req.params.modelName;
    pool.query('SELECT * FROM models WHERE modelName = ?', [modelName], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'Model not found' });
        }
    });
});

app.get('/api/models', (req, res) => {
    pool.query('SELECT * FROM models', (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

app.post('/api/subscribe', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  pool.query('INSERT INTO subscribers (name, email) VALUES (?, ?)', [name, email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json({ message: 'Subscription successful!' });
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
