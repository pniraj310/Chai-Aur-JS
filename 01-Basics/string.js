const name = "Niraj"

const repoCount = 50 

// console.log(name +" " + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Niraj-hc-com')


console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)

console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())


console.log(gameName.charAt(2))

console.log(gameName.indexOf('r'))

const newString = gameName.substring(0, 5)

console.log(newString)

const anotherString = gameName.slice(-8, 5)

console.log(anotherString)

const newString2 = "   Niraj   "
console.log(newString2.trim())

const url = "https://niraj.com/niraj%20patel"

console.log(url.replace('%20', '_'))

console.log(url.includes("niraj"))


console.log(gameName.split('-'))







