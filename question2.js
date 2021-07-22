var num1 = 5;
var num2 = 7;

//add two numbers
function addNum (num1, num2){
  let addNum = (num1 + num2);
  return addNum;
}
document.getElementById("add").innerHTML = "The addition of the two numbers is" + (addNum (5, 7));

//multiply two numbers
function multiNum(num1, num2){
  let multiNum = (num1 * num2);
  return multiNum;
}
document.getElementById("multi").innerHTML = "The multiplication of the two numbers is output" + (multiNum (5, 7));

//subtract two numbers
function subtractNum(num1, num2){
  let subtractNum = (num1 - num2);
  return subtractNum;
}
document.getElementById("sub").innerHTML = "The subtraction of the two numbers is" + (subtractNum(8, 5));


//divide two numbers
function divideNum(num1, num2){
  let divideNum = (num1 / num2);
  return divideNum;
}
document.getElementById("divide").innerHTML = "The division of the two numbers is" + (divideNum(8, 5));
