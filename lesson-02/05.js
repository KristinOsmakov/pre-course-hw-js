let passport = {
    name: "Petr",
    surname: "Petrov",
};
let a = passport;
a.name = "Ivan";
console.log(passport);
console.log(a);