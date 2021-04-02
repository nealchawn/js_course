let re;

re = /.*(l)/i; // i = case ignore
re = /(h).+(l).+(d)/g; // g = global search

console.log(re)
console.log(re.source)

// exec() - Return result in an array or null

let result = re.exec('hello world');

console.log(result);

// test() - true or false if match
// match() - return array or null

result = "hello world".match(re);

console.log(result);

// search() - index of first match or -1

// replace(re, 'hello world')