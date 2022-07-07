// get the client
import mysql2 from 'mysql2';

// create the connection to database
const connection = mysql2.createConnection({
    host: `localhost`,
    user: `root`,
    password: ``,
    database: `cd_express_app`,
});

// simple query
// connection.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields) {
//         console.log(results);
//     }
// );

export default connection;
