const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const newColors = colors.filter(el => el === "черный" || el === "красный" || el === "желтый");
    return newColors.join("-");
}

console.log(createColorString());

