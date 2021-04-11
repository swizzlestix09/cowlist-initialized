const db = require('../db');

module.exports = {
  //get all cowdata
  getAll: (callback) => {
    const query = `SELECT * FROM cowslist`;
    db.query(query, (err, results) => {
      if (err) {
        console.log('error in getall');
        callback(err);
      } else {
        callback(results);
      }
    })
  },

  create: (params, callback) => {
    const query = 'INSERT INTO cowslist(name, description) VALUES(?, ?)' //query string, array of values
    const insertions = [params.name, params.description];
    db.query(query, insertions, (err, results) => { //this array of values that is assigned to ?
      if (err) {
        callback(err);
      } else {
        callback(results);
      }
    })
  }
}

