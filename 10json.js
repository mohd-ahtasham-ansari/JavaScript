obj ={'name' :'jhon', 'age': 21, 'city': 'new york'}

jsonString = JSON.stringify(obj)

console.log(jsonString)
console.log(typeof jsonString)

console.log(obj)
console.log(typeof obj)
parsedObj = JSON.parse(jsonString)
console.log(parsedObj)
console.log(typeof parsedObj)