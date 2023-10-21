let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let a = structuredClone(passportWithAddress);
a.address.city = "Bobryisk";
console.log(passportWithAddress);
console.log(a);
