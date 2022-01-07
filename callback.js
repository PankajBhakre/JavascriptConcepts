// Any functions which is passed as argument are called as callback functions, they dont have any name
// Any functions which takes another functions as argument are called Higher order Functions
function fn(f){
    f();
var name = 'Pankaj';
f();
console.log(name);
f();
}

fn(function(){
    var city = 'Mumbai';
    console.log(city);
})