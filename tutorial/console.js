window.onload = function(){
  console.clear();
  console.time("hello")
  console.log("hello world");
  console.log(123)
  console.log(true)
  x = "123"
  console.log(x)
  console.log([12,3,4])
  console.log({a:1, b:2})
  console.table({a:1, b:2})
  console.error("this is some error")
  console.warn("this is a warn")
  console.timeEnd("hello")
}