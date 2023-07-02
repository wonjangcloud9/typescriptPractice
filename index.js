var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
function add(a, b) {
    a + b;
}
// tsc -w
function test18(x) {
    var array = [];
    var y;
    if (typeof x === "number") {
        array[0] = x;
    }
    array[0] = y;
}
var 여친 = {
    name: "냥뇽녕냥",
};
var 도시;
function 가위바위보여(a) {
    return [a];
}
var test20 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
};
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
