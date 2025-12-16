const accountId = 123456
let accountEmail = "pniraj310@gmail.com"
var accountPassword = "123456"
accountCity = "Mumbai"
let accoountState

// accountId = 2 not allowed

accountEmail = "pniraj35@gmail.com"
accountPassword = "3435435"
accountCity = "Pune"
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity
, accoountState])
