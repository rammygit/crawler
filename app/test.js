function person(){
    this.age = 20;
}

var p = new person()
console.log('age is '+p.age)

function student(name,age){
    this.name = name;
    this.age = age;
    this.calculate10YearsAge = function(){
        //console.log(arguments.length);
        return this.age +10
    }
}

const arr = [1,2,3,4,5]

var handler = function(data,index){
    console.log(data);
}

//arr.forEach(handler);




var s = new student('ram',30)
console.log('calc' +s.calculate10YearsAge())
