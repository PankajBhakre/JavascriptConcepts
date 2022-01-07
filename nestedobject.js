var Student = {
    name :'Pankaj',
    email : 'pankaj@gmail.com',
    phone : 9860611895,
    address : {
        city : 'Mumbai',
        state: 'Mh',
        pin: 444002
    },
    getmarks: function(){
console.log('80 Marks');
    }
};
// to comment use ctrl + question mark
console.log(Student);
console.log(Student.address.city);

//Inserting new property
Student.address.area = 'Airoli';

console.log(Student);
console.log(Student.address.area);

Student.getmarks(); // object can call function