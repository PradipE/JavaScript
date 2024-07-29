//functions
function addnum(num1,num2){
    console.log(num1+num2);
}
addnum(2,4)
//constructor function
function person(fname,lname,dob){
     this.fname=fname;
     this.lname=lname;
     this.dob=dob;
     this.fullname=function()
     {
        return `${this.fname} ${this.lname}`
     }

}
// //instantiate object
//  //here we create a new array using this constructor 
 const person1=new person("pradip","mondal","24/01/2001");
 //console.log(person1);
 console.log(person1.fullname())