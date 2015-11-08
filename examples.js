var gt = require('./index.js');

var aryTitle = ["gt", "Basic", "red"];
var fnc = function(){
  console.log("task1");
  console.log("task2");
  console.log("task3");
  console.log("task4");
}

var gt = new gt();
gt.go(aryTitle, fnc);
