const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'final-project',
});

// test
pool.query('select * from mylife', (err, results) => {
  console.log(JSON.stringify(results));
  console.log('database connection successful');
});

module.exports = pool.promise();
