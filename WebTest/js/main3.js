let array = [10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
    array[i] += 5;
}
console.log(array[4]);


let count = 0;
while (count < array.length) {
    array[count] += count;
    count++;
}
console.log(array);
