const numbers = [1, 2, 3, 4];
const exponentialNumbers = numbers.map(function (number) {
return number * number;
});
console.log(exponentialNumbers);
// [1, 4, 9, 16]
//ex2
const celsiusTemp=[0,10,20,30];
const fahrenheitTemp=celsiusTemp.map(function(temp){
    return (temp*9/5)+32;

});
console.log(fahrenheitTemp);
//ex3
const people=[{firstName: "john" , lastName:"Doe"},
            {firstName: "mayssam" , lastName:"hassan"}]
const fullNames=people.map(function(person){return `${person.firstName}${person.lastName}`});
console.log(fullNames);
//ex4
const urls=['https://www.example.com"', 'https://www.facebook.com','https://www.google.com'];
const links=urls.map(function(url){return `<a href="${url}>${url}`});
//ex5
const names=["Alice", "Mayssam","Bob" ,"Charlie","Eve"];
const shortnames=names.filter(function(name){
    return name.length<=4;
});
console.log(shortNames);
//ex6
const numbers=[-1,2,-3,6,-8,9,-4];
const positiveNumbers=numbers.filter(function(num){return num>=0,});
console.log(positiveNumbers);
//ex7
const grades=[{name:"bob",grade:"80"},{name:"john",grade:"70"},{name:"Alice",grade:"60"}];
const pass=grades.filter(function(student)
{return  student>=70 ;});
console.log(pass);

const numbers=[1,2,3,4,5,6];
const sum=numbers.reduce(function(accumulator,currentValue){return accumulator*currentValue;} , 1);
