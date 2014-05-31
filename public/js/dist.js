(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {
  /*
   * Minimal classList shim for IE 9
   * By Devon Govett
   * MIT LICENSE
   */


  if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {
      Object.defineProperty(HTMLElement.prototype, 'classList', {
          get: function() {
              var self = this;
              function update(fn) {
                  return function(value) {
                      var classes = self.className.split(/\s+/),
                          index = classes.indexOf(value);

                      fn(classes, index, value);
                      self.className = classes.join(" ");
                  }
              }

              var ret = {
                  add: update(function(classes, index, value) {
                      ~index || classes.push(value);
                  }),

                  remove: update(function(classes, index) {
                      ~index && classes.splice(index, 1);
                  }),

                  toggle: update(function(classes, index, value) {
                      ~index ? classes.splice(index, 1) : classes.push(value);
                  }),

                  contains: function(value) {
                      return !!~self.className.split(/\s+/).indexOf(value);
                  },

                  item: function(i) {
                      return self.className.split(/\s+/)[i] || null;
                  }
              };

              Object.defineProperty(ret, 'length', {
                  get: function() {
                      return self.className.split(/\s+/).length;
                  }
              });

              return ret;
          }
      });
  }
};

},{}],2:[function(require,module,exports){
/**********************************
  Main file
*********************************/

(function() {

  window.addEventListener('load', function(e) {

    var classListShim = require('./lib/classListShim');

  });

})();

},{"./lib/classListShim":1}]},{},[2])