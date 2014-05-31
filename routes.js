module.exports = function(app) {

  /**********************************
    Import all controllers
  *********************************/
  var ctrl = require('./modules/importControllers')();


  /**********************************
    Welcome
  *********************************/
  app.get('/', ctrl.welcome.index);



  /**********************************
    Articles
  *********************************/
  /*
  app.route('/artikel/erstellen')
    .get(ctrl.article.new)
    .post(ctrl.article.create);
  */

  app.route('/artikel')
    .get(ctrl.article.show);

};
