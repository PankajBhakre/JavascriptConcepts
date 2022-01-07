// Object is data structure in JS & data structure is structure to store the data

var data = {
    name: 'Pankaj',
    city: 'Mumbai'
}
console.log(data);
// Inserting new property in the object
data.email = 'pankaj@gmail.com';
console.log(data);

// Updating the object property 
data.name = 'Ajay';
console.log(data);

//Accessing the particular property

console.log(data.city);

//delete the property from object 
delete data.email

console.log(data);
