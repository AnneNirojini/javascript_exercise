// creating array named fruits
var fruits = ["Apple", "Banana"];

// adding elements using index position
fruits.splice(1, 0, "Mango");
fruits.splice(2, 0, "Pineapple");
fruits.splice(3, 0, "Woodapple");
fruits.splice(4, 0, "Strawberry");
fruits.splice(5, 0, "rambuttan");

//output
console.log(fruits);

//element in index 3
document.getElementById("element3").innerHTML = (fruits[3]);

//legth of the array
document.getElementById("arrLength").innerHTML = (fruits.length);

//reverse order of array
document.getElementById("arrReverse").innerHTML = (fruits.reverse());
