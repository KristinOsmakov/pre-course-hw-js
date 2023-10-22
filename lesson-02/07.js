let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
const passportMarried2 = {...passportMarried, married:true};
console.log(passportMarried);
console.log(passportMarried2);
