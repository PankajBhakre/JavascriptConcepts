var arr = [35, 45, 67, 98];

arr.forEach((element, index) => {  // Higher order function 
    // console.log(element, index);
  if (element < 50) {
    console.log(element, index);
  }
});