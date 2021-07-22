// max value in an array
let numbers = [4, 13, 27, 0, -5];

document.getElementById("max").innerHTML = Math.max.apply(null, numbers);
document.getElementById("min").innerHTML = Math.min.apply(null, numbers);
