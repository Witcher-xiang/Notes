/*
  去掉首位空格的正则表达式
  /(^\s*)|(\s*$)/g
*/
let str = "    123   "
console.log( str)
const re = /^(\s*)|(\s*$)/g
console.log(str.replace(re,""))