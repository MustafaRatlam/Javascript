// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6, 4, 5, 7, 3, 2, 1, 0, -1, -3];
// let b = [
//   {
//     id: 1,
//     name: "abc",
//     category: "b",
//   },
//   {
//     id: 2,
//     name: "efg",
//     category: "a",
//   },
//   {
//     id: 3,
//     name: "yui",
//     category: "a",
//   },
//   {
//     id: 4,
//     name: "auy",
//     category: "b",
//   },
//   {
//     id: 5,
//     name: "ui",
//     category: "b",
//   },
//   {
//     id: 6,
//     name: "hkadh",
//     category: "b",
//   },
//   {
//     id: 7,
//     name: "abahkjfhc",
//     category: "a",
//   },
//   {
//     id: 8,
//     name: "abadc",
//     category: "b",
//   },
//   {
//     id: 9,
//     name: "abcad",
//     category: "a",
//   },
//   {
//     id: 10,
//     name: "abc",
//     category: "a",
//   },
// ];

// for(var i=0; i<a.length; i++){
//     console.log(a[i])
// };

// a.forEach(function (x) {
//   if (x < 7) {
//     console.log(x);
//   }
// });

//filter method will be able to return (used for conditioning array loop)

// let filtered= a.filter(function(x){
//     if (x<4){
//         return x
//     }
// });

// console.log(filtered)
// filter method returns the full array

// let selectedObj = b.find(function (x) {
//   if (x.id = 5) {
//     return x;
//   }
// });

// console.log(selectedObj)

// find method returns specific obj

// let mapItem = b.map(function (x) {
//   return x;
// });
// console.log(mapItem);

/// map and filter method both return the value map will return value in any case

///==================================Template literals=========================

// let str1 = 10.136873627845
// let str2 = 20.789614876476

// let c = `sum of ${str1} and ${str2} is ${(str1 + str2 ).toFixed(2)}`

// console.log (c)

///================================== Ternary Operators ================================

// let bool = "3";

// if (bool) {
//   console.log("abc");
// } else {
//   console.log("xyz");
// }

// ====================================== De Structure ==================================

// let a = {
//   id: 1,
//   subName: "Mustafa",
//   category: "C",
// };

// console.log(a.category);

// let { subName, id, category } = a;
// console.log(subName);

// let a = {
//   id: 3,
//   title: "abc",
//   b: {
//     id: 4,
//     title: "efg",
//   },
// };

// let { id, title } = a.b;

// console.log(title)

// let a = [
//   "abc",
//   "efg",
//   "lmo",
//   { id: 32, title: "mustafa", arr: [1, 2, 3, 4, 5] },
// ];
// let [val1, val2, val3, val4, val5] = a[3].arr;

// console.log(val5);

//======================================= spread Operators =========================

// let masterDetail = {
//   institute: "SAIMS",
//   GRN : 1233,
//   type: "A"
// };
// let a = {
//   id: 10,
//   name: "abc",
//   class: "C",
//   ...masterDetail,
// };

// console.log(a)

//==================================== Types of Functions ==========================

// ======== Arrow function =========

// let abc = (a) => {
//   console.log(a);
// };

// abc("Message");

// let xyz = (a) => {
//   return a;
// };

// console.log(xyz("Hello Mustafa"))

// let abc = a => {
//   console.log(a);
// };

// abc("hello");

// let a = () => "Hello Mustafa";

// console.log(a());

// let abc = (a, b) => a == b ? a + b : "error";
// console.log (abc(10,19))

// let abc = (a, b) => a + b;
// console.log(abc(10, 10));

// let abc = () => "Message";
// console.log(abc());

//****Higher Order Function */
// When a function called in the parameter of of the parent function it is called high order function.

// let a = (e) => {
//   console.log(e);
// };

// let b = () => {
//     return "Function B "
// }

// a(b()) // callback function b() is called when a parent when a() is called.

let a = () => {
    return ()=>{
        console.log("abc")

    }
}

let b = a()
b()