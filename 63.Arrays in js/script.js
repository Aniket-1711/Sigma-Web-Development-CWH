let arr=[1,3,5,7,9]
console.log(arr)
console.log(arr.length)
console.log(arr[3])//indexing starts from 0
arr[1]=2
console.log(arr) //we can modify the values of the array but the same is not possible with strings
// arrays in js can have heterogenous components
console.log(typeof arr)
// array in js is considered as object

//to convert an array into string separated by commas we use toString()
console.log(arr.toString())
console.log(arr) //the array is not itself modified

console.log(arr.join(" and "))
// it replaces the , with and ******this is helpful in future for UI

console.log(arr.pop())
// here it returns the popped element 

console.log(arr.push(45))
// push method return the new length of the array after appending the element
console.log(arr)

console.log(arr.shift())
// it removes/pops the element from first ie index 0
console.log(arr)


console.log(arr.unshift("Aniket"))
// unshift it to add the element at the beginning
console.log(arr)

console.log(delete arr[4])
// it replaces the existing value at index 4 with empty, when we print the arr the size remians same but when we try to print the value we get undefined and the return type of this delete is true if the value at index is deleted (ie replaced with empty)
// simply the memory for the deleted element is allocated in the array but there is no value to print


// to concatenate arrays we use concat() 
let arr1=[4,5,6]
let arr2=[6,7,8]
console.log(arr.concat(arr1,arr2))
// it doesn't modify the original arrays

// we also have sort() to sort the array
arr.sort()
console.log(arr)
// note after sort the original array is changed

// slice function
let nums=[1,2,3,4,5,6]
console.log(nums.slice(1,4)) //jus retrieves the sub array from 1 to 4 excluding index 4
// doesn't effect the original array
console.log(nums)

console.log(nums.reverse())
console.log(nums)
// this reverses the original array!