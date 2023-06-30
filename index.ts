type TestType = string | number;

let testName: string[] = ["kim", "park"];
let testAge: number[] = [20, 30];
let testBool: boolean[] = [true, false];

let test2: TestType = "kim";

let test3: { name?: string; age: number } = { name: "kim", age: 20 };

const test4 = (name: string, age: number): string => {
  return name + age;
};

type Member = [string, number, boolean];

let test5: Member = ["kim", 20, true];

type Member2 = {
  name: string;
  age: number;
};

let test6: Member2 = {
  name: "kim",
  age: 20,
};

class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
