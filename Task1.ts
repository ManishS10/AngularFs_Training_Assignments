
var employeeId:number = 546457
var uname:string  = "Manish";
var email:string  = "manish.senapati@citiustech.com";
var age:number  = 25;
var salary:number = 45000;
var employeejob:string = "Manager";
var employeedeptno = 10;

var isPermanentEmployee:boolean = true;


console.log("------------------------------------------------");

// var strOutput = "User Details  Name : "+ uname +  ", Email : "+ email + ", Age : "+ age + ", Is Valid User : "+ isValidUser;
var strOutput = `Employee Details  Name : ${uname}, Email : ${email}, Age : ${age}, Is Permanent Employee : ${isPermanentEmployee}, Employee Job : ${employeejob}
Department No : ${employeedeptno} Salary : ${salary}`; 
console.log(strOutput);