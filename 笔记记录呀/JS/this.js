function foo(num){
  this.count++ // 这里直接创建了NaN
}
foo.count = 0
foo()
foo()
foo()
foo()
foo()
foo()
console.log(foo.count)
console.log(count)