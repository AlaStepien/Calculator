let num1 = 8
let num2 = 2
let addSolution = num1 + num2
let subtractSolution = num1 - num2
let divideSolution = num1 / num2
let multiplySolution = num1 * num2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function adding() {
    
    document.getElementById("sum-el").textContent = addSolution
    console.log(adding)
}

function minus() {
    document.getElementById("sum-el").textContent = subtractSolution
}

function dividing()
{
  document.getElementById("sum-el").textContent = divideSolution  
}

function multiplying() {
   document.getElementById("sum-el").textContent = multiplySolution  
}