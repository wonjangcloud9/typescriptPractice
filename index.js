var testName = ["kim", "park"];
var testAge = [20, 30];
var testBool = [true, false];
var test2 = "kim";
var test3 = { name: "kim", age: 20 };
var test4 = function (name, age) {
    return name + age;
};
var test5 = ["kim", 20, true];
var test6 = {
    name: "kim",
    age: 20,
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var test7 = 20;
var school = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
