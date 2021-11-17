let hasValue: boolean = true;
let count: number = 2;
let double: string = `sss`;

const person2= {
  name: "jack",
  age:22
}

const fruit = ["apple","grape","banana"];
const book: [string,number,boolean] = ["business", 1500, false];

enum coffeeSize  {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot:true,
  size:coffeeSize.TALL
}

let unionType: number | string = 10;
unionType = "ed"

let unionType2: (number | string)[] = [21,"sss"];

type clothSize = "small" | "medium" | "large";

const apple: "apple" = "apple";
let clothSize : clothSize = "small";
const cloth = {
  color:"white",
  size: clothSize
}

function add(num1: number,num2: number) {
  return num1 + num2
}

function sayHello (): void {
  console.log("ss")
}

const anotherAdd: (n1:number, n2:number) => number = function (num1: number,num2: number) {
  return num1 + num2
};

function doubleAndHandle(num:number, cb:(num: number)=>number): void {
  //cbは関数の名前として扱われる
  const doubleNum = cb(num*2);
  console.log(doubleNum);
}

doubleAndHandle(22,doubleNum =>{
  return doubleNum
} );