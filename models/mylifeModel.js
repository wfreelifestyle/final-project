const db = require('../utils/database');

const Mylife = class Mylife {
  constructor(id, category, href) {
    this.id = id;
    this.category = category;
    this.href = href;
  }
  static fetchAll() {
    return db.execute('select * from mylife');
  }

  // DELETE
  static deleteById(id) {
    return db.execute('DELETE FROM mylife where id = ?', [id]);
  }
};

// test
const test = async (req, res) => {
  try {
    await Mylife.fetchAll().then(([rows]) => {
      console.log('testFetchAll', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

// test();

module.exports = Mylife;
