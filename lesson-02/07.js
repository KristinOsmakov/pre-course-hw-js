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
    passportMarried2 = {name: passportMarried.name, surname: passportMarried.surname, married: true, address: passportMarried.address}
}
PM()
console.log(passportMarried);
console.log(passportMarried2);
