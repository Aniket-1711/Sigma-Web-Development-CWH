//few more array methods ---> splice with remove and replace

let numbers=[1,2,3,4,5,6]
console.log(numbers.splice(1,3))
// the spice method removes the values of the indices speicified in it, it also return the elements in the form of array that were removed and it does effec the original array
console.log(numbers)




// In JavaScript, the `splice()` method is used to **add, remove, or replace** elements in an array at a specific index.

// ### **Syntax**
// ```js
// array.splice(start, deleteCount, item1, item2, ...);
// ```
// - `start` → The index where changes begin.
// - `deleteCount` → The number of elements to remove.
// - `item1, item2, ...` → Elements to add at `start` position (optional).

// ---

// ### **Examples**

// #### **1. Removing elements**
// ```js
// let arr = ["A", "B", "C", "D", "E"];
// arr.splice(1, 2); // Removes 2 elements starting from index 1

// console.log(arr); // Output: ["A", "D", "E"]
// ```

// #### **2. Adding elements**
// ```js
// let arr = ["A", "B", "C"];
// arr.splice(1, 0, "X", "Y"); // Inserts "X" and "Y" at index 1

// console.log(arr); // Output: ["A", "X", "Y", "B", "C"]
// ```

// #### **3. Replacing elements**
// ```js
// let arr = ["A", "B", "C"];
// arr.splice(1, 1, "X"); // Replaces "B" with "X"

// console.log(arr); // Output: ["A", "X", "C"]
// ```
