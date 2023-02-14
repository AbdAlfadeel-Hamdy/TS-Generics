// Code goes here!
// const names: Array<string> = []; // === string[]

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.toFixed();
// });

//////////////////////// GENERIC FUNCTION //////////////////////////////
//////////////////////// CONSTRAINTS //////////////////////////////

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Gonzalo" }, { age: 22 });

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let text = "Got no value!";
  if (element.length === 0) text = "Got 1 element.";
  if (element.length > 1) text = `Got ${element.length} elements.`;
  return [element, text];
};

console.log(countAndDescribe("Gonzalo"));
console.log(countAndDescribe([1, 2, 3]));

// keyof Constraint

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return "Value " + obj[key];
};

extractAndConvert({ name: "gonzalo", age: 12 }, "age");
