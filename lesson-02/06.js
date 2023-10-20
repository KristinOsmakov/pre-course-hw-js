let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let a = {};
for (let key in passportWithAddress) {
    a[key] = passportWithAddress[key];
}
a.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(a.city);