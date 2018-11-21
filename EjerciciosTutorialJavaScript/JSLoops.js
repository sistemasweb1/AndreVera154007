//Ejercicio 1
var i;
for (i = 0; i < 10; i++) {
	console.log(i);
}

//Ejercicio 2
var fruits = ["Apple", "Banana", "Orange"];
for (x in fruits) {
	console.log(x);
}

//Ejercicio 3
var i = 0;
while (i < 10) {
  	console.log(i);
    i++
}

//Ejercicio 4
var i = 0;
while (i < 10) {
	console.log(i);
	i = i + 2;
}

//Ejercicio 5
for (i = 0; i < 10; i++) {
	console.log(i);
	if (i == 5) {
		break;
	}
}

//Ejercicio 6
for (i = 0; i < 10; i++) {
	if (i == 5) {
		continue;
	}
	console.log(i);
}
