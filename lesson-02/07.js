let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let passportMarried2 = {}
const PM = () => {
    passportMarried2 = {...passportMarried, married: true}
}
PM()
console.log(passportMarried);
console.log(passportMarried2);
