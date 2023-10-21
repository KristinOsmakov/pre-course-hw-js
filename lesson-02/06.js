let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let a = {...passportWithAddress, address: {...passportWithAddress.address}}
a.address.city = "Bobryisk";
console.log(passportWithAddress);
console.log(a);
