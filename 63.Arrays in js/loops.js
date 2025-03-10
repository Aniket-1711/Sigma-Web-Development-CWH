//this is to demonstrate how we will apply for each and classical for loop
let a=[4,5,6,7,8.8]
for(let x=0;x<a.length;x++){
    console.log(a[x], typeof x)
}

// there is concpet call for each loop
a.forEach((value,index, nums)=>{ //this takes the first parameter as value in the array we apply for each in, the index then the array completely , it's not at all mandatory to use all the 3 parameters
    console.log(value,index, nums)
})

// => is a lambda expression which is equivalent to or the below the actual version of the above example
a.forEach(function(value,index,arr){
    console.log(value,index,arr);
});

