module.exports = function() {

  this.go = function(gt, fnc) {
    require('m-util');
    var art = require("ascii-art");
    var Async = require("async");

    Async.waterfall([
      function(callback) {
      setTimeout(function() {
          art.font(' '+ gt[0], gt[1], gt[2], function(rendered){
            console.log();
            console.log(rendered);
          });
          callback(null, ".");
        }, 10 * 0);
      },
      function(arg1,callback) {
        setTimeout(function() {
          fnc();
          callback(null, ".");
        }, 10 * 1);
      }
    ], function(err, arg1) {
      if (err) {
        throw err;
      }
      console.log('gulp-title done.');
      console.log(arg1);
    });
  }
}
