var arr = ["Nit", "Hyd", true, { brand: "Apple", Model: "Iphone 13" }];

 console.log(arr.length); // returns the length of array
console.log(arr);
arr.push("TS");    // Appends new elements to the end of an array, and returns the new length of the array

 console.log(arr);

arr.unshift("Kabir");
console.log(arr);  //Inserts new elements at the start of an array, and returns the new length of the array.

 arr.pop(); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 console.log(arr);
arr.pop();
console.log(arr);

arr.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);
arr.shift();
console.log(arr);