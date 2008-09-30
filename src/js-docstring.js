// - dlf
(function () {
  var expression = /^function\s*\(([^)]*)\)\s*\{\s*("([^"]*)")?/m;
  Function.prototype.docstring = function () {
    return this.toString().match(expression)[3];
  };
  
  Function.prototype.argstring = function () {
    var match = this.toString().match(expression);
    if(match && match[1].length > 0) {
      return match[1].replace(/ /g, '').split(",")
    }
    else {
      return [];
    }
  }
  
  Function.prototype.arity = function () {
    var selfString = this.toString();
    var expr = /(arguments\[|arguments.length)/g;
    if(selfString.match(expr)) {
      return -1;
    }
    else { 
      return this.length;
    }
  }
})();

