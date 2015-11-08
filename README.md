# gulp-title
[![npm total download](https://img.shields.io/npm/dt/gulp-title.svg?style=flat)](https://www.npmjs.com/package/gulp-title)
[![npm version](https://badge.fury.io/js/gulp-title.svg?style=flat)](https://badge.fury.io/js/gulp-title)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://ruedap.mit-license.org/2015)

## インストール - Install
```
$ npm i -S gulp-title
```

## 使い方 - Usage

### Functions
```
module.exports = function() {…}

  this.go = function(gt, fnc) {…}
```

### NodeJS
<table>
<tr>
  <th><h3>Code</h3></th>
  <th><h3>Result</h3></th>
</tr>
<tr>
  <td>
  <div class="highlight highlight-source-js">
    <pre class="rich-diff-level-zero">
require('gulp-title');
var aryTitle = ["gt", "Basic", "red"];
var fnc = function(){
  console.log("task1");
  console.log("task2");
  console.log("task3");
  console.log("task4");
}

var gt = new gt();
gt.go(aryTitle, fnc);
    </pre>
  </div>
  </td>
  <td>
  <pre class="rich-diff-level-zero">
# node example.js

[31m   d888b  d888888b 
  88' Y8b `~~88~~' 
  88         88    
  88  ooo    88    
  88. ~8~    88    
   Y888P     YP    
                   
                   
[0m
task1
task2
task3
task4
gulp-title done.
.
  </pre>
  </td>
</tr>
</table>

## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>

