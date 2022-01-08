class A {
    name;
    city;
    constructor(name, city) {
      this.name = name;
      this.city = city;
    }
  
    printDetails() {
      console.log(this.name, this.city);
    }
  }
  
  class B extends A {
    email;
  
    phone;
    constructor(email, phone) {
      super("NIT", "HYD"); // Why it should be in first only
      this.email = email;
      this.phone = phone;
    }
    printEmailPhoneDetails() {
      console.log(this.email, this.phone);
    }
  }
  
  var b1 = new B("NIT@gmail.com", 9999999999);
  var a1 = new A('Pankaj', 'Mumbai');
  a1.printDetails();
//   a1.printEmailPhoneDetails();

  b1.printDetails();
  b1.printEmailPhoneDetails();