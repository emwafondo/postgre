// Import the 'pg' package
const { Client } = require('pg');

// Create a new client object with your database credentials
const client = new Client({
  user: '',
  host: 'local host',
  database: 'zambia',
  password: 'mose',
  port: '5432',
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

// Define a SQL query to select data from your table
const sqlQuery = 'SELECT(shape area) * FROM zambia proj';

// Use the client object to execute the query
client.query(sqlQuery, (err, result) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log(result.rows);
    // Use the data returned by the query to create your web map
  }
});

// Close the client connection when you're done
client.end();


// Import the 'pg' package
const { Client } = require('pg');

// Create a new client object with your database credentials
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

// Define a SQL query to select data from your table
const sqlQuery = 'SELECT (shapearea), *FROM zambia proj';

// Use the client object to execute the query
client.query(sqlQuery, (err, result) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log(result.rows);
    // Use the data returned by the query to create your web map
  }
});

// Close the client connection when you're done
client.end();