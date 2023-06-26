var numbers = [23, 43, 22, 12, 45, 56, 67];
numbers.push(77);
numbers.push(87);
console.log(numbers);

numbers.pop()
numbers.pop()
console.log(numbers);

var elements = numbers.pop();
console.log(elements);

 numbers.unshift(100);
console.log(numbers);

numbers.splice(2, 0, 33);
console.log(numbers);

var girls = ["simi", "rimi", "lili", "nila"];
girls.push("rima", "ripa", "sumu");
girls.unshift("juipui","mimi");
girls.splice(3, 0, "antor")
girls.pop()
console.log(girls);
