let array = [1, 2, 3, 4, 5];

array.push(10);
delete array[4];
console.log(array);

array.splice(3, 2);
console.log(array.length);
console.log(array);