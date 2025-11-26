let firstName = "Arun"
console.log(firstName)
console.log(typeof firstName)

let companyName = null
console.log(companyName)
console.log(typeof companyName)


let mobileNumber = 9500373157
console.log(mobileNumber)
console.log(typeof mobileNumber)


let isAutomation = true
console.log(isAutomation)
console.log(typeof isAutomation)

let hasPlaywright
console.log(hasPlaywright)
console.log(typeof hasPlaywright)

var hasPlaywrightVar
console.log(hasPlaywright)
console.log(typeof hasPlaywright)

const name = "Arun"

function one(){
    let a = 10
    let c = a+1
    return c
}

function greet(){
   // var message ="Hello Team"


   //console.log("Accesing the let inside function scope",message);  // inside function let is accesible
    
    if (true) {
    var message = "Good evening"
    console.log("Accessing let inside the if block",message); //inside if block let is accessible  
    }
    console.log("Accessing let outside the is block",message);
    
  }
//console.log("Acessing let outside the function",message);//outside the function scope var is not accessible


  greet()
