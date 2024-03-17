import React from "react";

const JSInterview2 = () => {
  console.log("JSInterview Prep Part 2 Starts here");
  /**
   * ? Types of Error in JS
   * ? evalError InternalError RangeError ReferenceError SyntaxError TypeError URIError
   * ? evalError:error regarding the global function eval()
   * ? internalerror:internal error in JS engine
   * ? RangeError:numeric value or parameter is outside of range
   * ? referenceError:invalid variable reference
   * ? syntaxerror: syntax while writing the code
   * ? typeerror:parameter or variable not valid for type
   * ? uriparameter: invalid parameter passed to decodeURL or enCodeURL
   */
  // how to decremte the length of an array
  //method one
  /* const arr = [1,2,3,4,5]
    arr = []
    //method two
    arr.length = 0
    // method three pop
    while(arr.length > 0){
        arr.pop()
    } */
  const array = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Kerla",
    "Pune",
    ["Kochi", "Dehradun"],
    ["Satara", "Ladakh"],
    "Manali",
    "Himachal",
    "Karjat",
    ["Kerla", "Dehradun"],
    ["Mumbai", "Bangalore"],
  ];
  const numbArr = [12, 15, 17, 12, 42, 24, 15, 48, 17, 55, 42, 77];
  const fruitArr = [
    "Mango",
    "Banana",
    "Tangrine",
    "Peach",
    "Apple",
    "Mango",
    "Banana",
    "DragonFruit",
    "Kiwi",
    "Grapes",
  ];
  const bikeArray = [
    "Yamaha",
    "Splendor",
    "Passion",
    "Unicorn",
    "Access",
    "Duo",
    "Activa",
    "Thunderbird",
    "Unicorn",
    "Yamaha",
    "Splendor",
    "Passion",
    "Access",
  ];
  const removeDupli = (arr) => {
    return arr.flat().filter((elem, index) => arr.indexOf(elem) === index);
  };
  console.log(removeDupli(array));
  const removeDuplicated = (arr) => {
    return arr.filter((elem, index) => arr.indexOf(elem) === index);
  };
  const removeDuplicateFruits = (arr) => {
    return arr.filter((elem, index) => arr.indexOf(elem) === index);
  };
  const removeDuplicateBikes = (arr) => {
    return arr.filter((elem, index) => arr.indexOf(elem) === index);
  };
  console.log(removeDuplicated(numbArr));
  console.log(removeDuplicateFruits(fruitArr.sort()));
  console.log(removeDuplicateBikes(bikeArray.sort()));
  console.log("JSInterview Prep Part 2 Ends here");
  return <div>check console for better understanding</div>;
};

export default JSInterview2;
