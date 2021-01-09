const Mylife = require('../models/mylifeModel');

// READ

exports.getMylife = async (req, res) => {
  let data = {};
  try {
    await Mylife.fetchAll().then(([rows]) => {
      console.log('getMylife', JSON.stringify(rows));
      data.mylife = rows;
      res.json(rows);
    });

    // res.render('mylife', { title: 'Mylife', data: data.mylife });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteMylifeById = async (req, res, next) => {
  console.log('deleteMylifeById', req.params.id);
  try {
    await Mylife_xx.deleteById(req.params.id).then(([rows]) => {
      res.redirect('/bizpage2_xx/mylife');
    });
  } catch (err) {
    console.log(err);
  }
};
