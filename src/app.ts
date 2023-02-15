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

// GENERIC CLASSES

class DataStorage<T extends string | number> {
  data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem("Max");
stringStorage.addItem("Hatem");
console.log(stringStorage.getItems());
stringStorage.removeItem("Max");
console.log(stringStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2);

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "Max" });
// objectStorage.addItem({ name: "John" });
// console.log(objectStorage.getItems());
// objectStorage.removeItem({ name: "Max" });
// console.log(objectStorage.getItems());

// GENERIC UTILITY TYPES

// Partial

interface CourseGoal {
  title: string;
  description: string;
  complete: Date;
}

const setCourseGoal = (
  title: string,
  description: string,
  date: Date
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.complete = date;
  return courseGoal as CourseGoal;
};

// Readonly

const names: Readonly<string[]> = ["Adham"];
// names.push("Hossam");
