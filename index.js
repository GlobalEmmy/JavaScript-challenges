
//FUNCTIONS

function getMilk(bottles) {  
    var money = 1.5
    var bottlesRequired = Math.floor(bottles/money)
    // var change = bottles % money
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("Buy " + bottlesRequired + " bottles of water." + " Your change is");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return bottles % 1.5
  }
  var change = getMilk(4)
 console.log(change); 

//BMI CALCULATOR

function bmicalc(weight, height){
    var bmi = weight/(Math.pow(height, 2))
    return bmi
}
var bmi = bmicalc(65, 1.8)
console.log("Your bmi is " + Math.floor(bmi))

//LOVE CALCULATOR

prompt("What is your name?")
prompt ("What is your spouse name?")
var randomNumber = Math.round(Math.random() * 100)
if (randomNumber >70){
alert("Your lovescore is " + randomNumber + "%. You are a perfect match")
}else{
    alert("Your lovescore is " + randomNumber + "%. You need to work on your relationship")
}

//LEAP YEAR CHALLENGE

function isLeap(year) {
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 ===0){
                return ("Its a leap year")
            }else{
                return("Its not a leap year")
            }

        } else{
            return("Its a leap year")
        }
    } else{
        return ("Its not a leap year")
    }
}
isLeap(2000);

//FIZZBUZZ CHALLENGE

var output = [];
var count = 1
function fizzBuzz(){

     while(count <=100){
    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz")
    }
    else if (count % 3===0){
        output.push("Fizz")
    }
    else if (count % 5 === 0){
        output.push("Buzz")
    }
    else {
        output.push(count)
    }

    count++
 }
 console.log(output)
}
fizzBuzz()

  //WHOSPAYING LUNCH CHALLENGE

var names = ["Emmanuel", "David", "Samuel"]
function whosPaying(name){
  var numberOfPeople = names.length;
  var randomPayerPosition = Math.floor(Math.random() * numberOfPeople)
  var randomPayer = names[randomPayerPosition]
  return (randomPayer + " is paying for the food!")
  console.log(whosPaying())
}
whosPaying(name)


//FIBBONACCI CHALLENGE

function fibbonacciGenerator(n) {

    var output = [];
    if (n === 0){
         output= [0];
        }
        else if( n === 1){
         output = [0,1];
        } 
        else {
            output = [0,1];
            for (var i = 2; i < n; i++)
            output.push(output[output.length - 2] + output[output.length - 1])
        }
        
        return output;
}
   output = fibbonacciGenerator(20)
   console.log(output)