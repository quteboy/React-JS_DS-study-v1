import React from "react";

const JSInterview3 = () => {
  console.log("JSInterview Prep Part 3 Starts here");
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  } /// output is 3 because var functional scope for 1st iteration value will be one 2nd iteration value be 2 and so on
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  } /// output is 0 1 2
  /// let has block scope for every iteration so it creates new variable everytime

  /**
   * * Hoisting In Javascript
   * * In English hoisting means pulling up something to top.
   * * in Javascript it is behavior in which functional and variable declared using var keyword are moved to top of their scope
   * *before executing of the code
   */
  //Example before hoisting
  var firstName = "Jon Doe";
  console.log(firstName); /// 'Jon Doe'
  //Example after hoisting
  var firstName;
  firstName = "Jean Doe";
  console.log(firstName); /// 'Jean Doe'
  /**
   * * Promises in JavaScript
   * * Promises are a way to handle asynchronous operations in JS.
   * * It is used to out if asynchronous operation is successfully completed or not
   * * promises has 3 states pending fullfilled or rejected
   *  * promises starts with pending state if async operation is completed then state updates to fullfilled
   *  * - if async operation is not successful then state updates to rejected
   *  * in api call when api method starts then promise state is in pending state when api is successfully fetched
   *  * - it promise state updates to fullfilled if api call gets failed to an error then state updates to rejected
   */
  // promise code snippet
  const thisIsPromise = () => {
    let promise = new Promise(function (resolve, reject) {
      //do something
    });
  };
  /// promises using async await and then catch block
  const fetchData = async () => {
    var result = await fetch(URL)
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  /**
   * ! Scoping in Javascript
   * ? block scoped
   * ? functional scoped
   * ? global scoped
   * ? module scoped
   */
  /// global scope
  const globalVar = "I am availabe everywhere";
  /**
   * ? above globalVar is global scoped variable it can be accessed anywhere in this entire JS file
   */
  // block scoped variable
  const blockScopeVar = () => {
    if (true) {
      const a = "Kartik Aryan";
      console.log(a); // Kartik Aryan its called block scoped
    }
    console.log(a); // Referance error as a is not defined due to block scoping
  };

  /// functional scoped variable
  function funcScopedVar() {
    const a = "Ranveer Singh";
    if (true) {
      const b = "Deepika Padukone";
      console.log(a, b); // Ranveer Singh , Deepika Padukone
    }
    console.log(a, b); // Referance error as b is not defined to due block scoping
    console.log(a); /// Ranveer Singh due to functional Scope
    /**
     * ? variable a is functional scope it can be accessed inside the entirity of function
     * ? b is block scoped function it can only be accessed inside of if statement
     * */
  }
  /**
   * ? Const let and var
   *  ! Const - block level variable can not be re-declare
   *  ! let - block level variable can be re-declare using diffrent value
   *  ! var - functional level variable can be re-declare using value can be initialize before declaration benefit of hoisting
   */
  /**
   * ? cookies localStorage sessionStorage
   * ! Cookies - 4kb capacity manual expire date can be sent with request stored browser and server
   * ! localStorage - 10mb capacity never expires can not be sent with request store in browser only
   * ! sessionStorage - 5mb capacity expires when tab is closed cant send with request store in browser only
   */
  /**
   * ? Spread Operator
   */
  // add new elements to existing array with elements
  var arr = [
    "Chennai Super Kings",
    "Delhi DareDevils",
    "Kolkata Knight Riders",
    "Mumbai Indians",
  ];
  var newArr2 = [
    "Rajsthan Royals",
    "Kochi Tuskers Kerala",
    "Punjab Kings XI",
    ...arr,
  ];
  console.log("newArr2", newArr2);
  console.log("JSInterview Prep Part 3 Ends here");
  // pass elements of array as argument to a function
  const addNumber = (a, b, c) => {
    return a + b + c;
  };
  var arr3 = [1, 2, 3];
  console.log(addNumber(...arr3));
/// copy array
var arr4 = [...newArr2]
console.log('arr4',arr4)
// concatenate the arrays
var numbArr1 = [1,2,3,4]
var numbArr2 = [5,6,7,8]
//numberArr3 = numbArr1.concat(numbArr2)
var finalArr = [...numbArr1,...numbArr2]
 /**
   * ? Rest Operator
   */
  // !condense multiple arguments into single array.
  function multipler(multiplier,...theArs){
    return theArs.map(function(elem){
      return multiplier * elem
    })
  } 
  var finalNeArr = multipler(1,2,3,4,5)
  console.log('finalNeArr',finalNeArr)
  return <div>JSInterview3</div>;
};

export default JSInterview3;
