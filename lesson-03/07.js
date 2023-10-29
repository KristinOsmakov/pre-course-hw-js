const numbers = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [100, 200, 300, 400, 500],
];

console.log(numbers.map(row => row.filter(num => num % 2 === 0)));

