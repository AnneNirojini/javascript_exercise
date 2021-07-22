// object creation
const person = {
  firstName:"Nimal",
  lastName:"Raj",
  age:"15",
  city:"Kandy"
};

//display output
document.getElementById("person").innerHTML = "My name is" +  " " + person.firstName + " " + person.lastName + "." +
"I'm" + " " + person.age + " " + "years old." + " " + "I live in" + " " + person.city + ".";
