let string = "Mr. Red has red car and red bike";
console.log(string);
let reg = new RegExp('red','gi')
let rep =string.replace(reg,'blue');
console.log(rep);