module.exports = {

  // is called before every other action
  before: function(req, res, next) {

    console.log('before');

    next();

  },

};
