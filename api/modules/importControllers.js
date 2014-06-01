module.exports = function() {

  var fs = require('fs');

  var ctrls = {};

  fs.readdirSync(__dirname + '/../controllers').forEach(function(name) {

    ctrls[name.split('.').shift()] = require(__dirname + '/../controllers/' + name);

  });

  return ctrls;

};
