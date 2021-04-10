const db = require('./db');

module.exports = {
  //get all cowdata
  getAll : (callback) => {
    const query = `SELECT * FROM cowList`;
    db.query(query, (err, results) => {
      callback(results);
    })
  }

  create: (params, callback) => {
    const query = `INSERT INTO cowslist (name, description) VALUES(params.name, params.description)`
    db.query(query, (err) => {
      callback(err);
    })
  }
}
