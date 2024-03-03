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
  console.log("JSInterview Prep Part 3 Ends here");

  return <div>JSInterview3</div>;
};

export default JSInterview3;
