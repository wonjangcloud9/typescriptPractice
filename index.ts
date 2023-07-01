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

let test7: number | string = 20;

let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];

function add(a?: number, b?: number): void {
  a + b;
}

// tsc -w

function test18(x: number | string) {
  let array: number[] = [];
  let y;
  if (typeof x === "number") {
    array[0] = x;
  }
  array[0] = y as number;
}

type GirlFriend = {
  readonly name: string;
};

const 여친: GirlFriend = {
  name: "냥뇽녕냥",
};

여친.name = "카리나";

let 도시: "오사카" | "나고야" | "도쿄";

function 가위바위보여(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return [a];
}
