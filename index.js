var hasValue = true;
var count = 2;
var double = "sss";
var person2 = {
    name: "jack",
    age: 22
};
var fruit = ["apple", "grape", "banana"];
var book = ["business", 1500, false];
var coffeeSize;
(function (coffeeSize) {
    coffeeSize[coffeeSize["SHORT"] = 0] = "SHORT";
    coffeeSize[coffeeSize["TALL"] = 1] = "TALL";
    coffeeSize[coffeeSize["GRANDE"] = 2] = "GRANDE";
    coffeeSize[coffeeSize["VENTI"] = 3] = "VENTI";
})(coffeeSize || (coffeeSize = {}));
var coffee = {
    hot: true,
    size: coffeeSize.TALL
};
var unionType = 10;
unionType = "ed";
var unionType2 = [21, "sss"];
var apple = "apple";
var clothSize = "small";
var cloth = {
    color: "white",
    size: clothSize
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log("ss");
}
console.log(sayHello());
