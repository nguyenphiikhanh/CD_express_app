// get the client
import mysql2 from 'mysql2';
require('dotenv').config()

const HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASS = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_DATABASENAME;
// create the connection to database
const connection = mysql2.createPool({
    host: `${HOST}`,
    user: `${DB_USERNAME}`,
    password: `${DB_PASS}`,
    database: `${DB_NAME}`,
});

// simple query
// connection.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields) {
//         console.log(results);
//     }
// );

export default connection;
