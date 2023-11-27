var x = 10;
var name = "Adam";
var cars = ["Audi","Toyota","Mazda"];

// console.log(x);

// alert(x)

// input = prompt("Meno", "")

// alert("Ahoj, " + input);

for (var i = 0;i<cars.length;i++) {
    console.log(cars[i])
}

for (car in cars) {
    console.log(cars[car]);
}

for (car of cars) {
    console.log(car);
}

var i = 0;
while (i<cars.length) {
    console.log(cars[i]);
    i++;
}

function multiply(x,y) {
    return x*y;
}
console.log(multiply(3,5));

// var text1 = document.getElementById("text-1");
var text1 = document.querySelector("#text-1")
var ps = document.getElementsByClassName("paragraph")
var tags = document.getElementsByTagName("p")

console.log(text1)
console.log(ps)
console.log(tags)

for (p of ps) {
    console.log(p.innerHTML);
}


var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var vysledok = document.getElementById("vysledok");

function scitaj() {
    vysledok.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

function odcitaj() {
    vysledok.innerHTML = parseInt(input1.value) - parseInt(input2.value);
}