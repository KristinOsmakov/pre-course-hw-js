let passport = {
    name: "Petr",
    surname: "Petrov",
};
let a = {};
for (let key in passport) {
    a[key] = passport[key];
}
a.name = "Ivan";
console.log(passport);
console.log(a);