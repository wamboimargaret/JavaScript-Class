function Person (name,age,height){
  this.name = name;
  this.age= age;
  this.height= height;
  this.greet= function(){
    console.log("Hello")
  }
};

let adam = new Person('Adam',25,'7ft')
console.log({adam});
adam.weight = 60;
console.log({adam})

let eve = new Person('Eve',20,'5ft');
console.log({eve});

Person.prototype.race = 'black'
Person.prototype.nationality ='kenyan'

console.log(adam.race);
console.log(eve.race='white');
console.log(adam);
console.log(eve)

console.log(adam.nationality);
Person.prototype.yearOfBirth = function(){
    let year = new Date().getFullYear();

    let birth = year - birth.age;
}

