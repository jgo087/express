/**********************************
  Maintain order, please!
*********************************/


module.exports = function(app) {

  /**********************************
    Import all controllers
  *********************************/
  var ctrl = require('./api/modules/importControllers')();


  // gets called before every other action
  app.use(ctrl.base.before);


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
