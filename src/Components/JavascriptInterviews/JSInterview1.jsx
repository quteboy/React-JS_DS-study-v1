import React, { useEffect } from "react";

function JSInterview1() {
  /// famous fizzbuzz challenge
  const fizzBuzzChallenge = () => {
    for (let i = 0; i < 101; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "Fizzbuzz");
      } else if (i % 3 == 0) {
        console.log(i, "Fizz");
      } else if (i % 5 == 0) {
        console.log(i, "Buzz");
      }
    }
  };
  const fizzBuzzChallenge2 = () => {
    for (var i = 0; i < 101; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FizzBuzz");
      } else if (i % 3 == 0) {
        console.log("Fizz");
      } else if (i % 5 == 0) {
        console.log("Buzz");
      }
    }
  };

  const fizzBuzzChallenge3 = () => {
    for (let i = 0; i < 101; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FizzBuzz");
      } else if (i % 3 == 0) {
        console.log("Fizz");
      } else if (i % 5 == 0) {
        console.log("Buzz");
      }
    }
  };
  /// string reverse and palindrome check
  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    var newString2 = str.split("").reverse().join("");
    console.log("newString2", newString2);

    console.log("newString", newString);
  }
  const reverseString2 = (string) => {
    var newString2 = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newString2 += string[i];
    }
    console.log("newString2", newString2);
  };

  const reverString3UsingArray = (string) => {
    var splitStr = string.split("");
    var reverseString = splitStr.reverse();
    var joinedString = reverseString.join("");
    console.log("joinedString", joinedString);
  };
  const reverString3ArrayV2 = (str) => {
    var finalString = str.split("").reverse("").join("");
    console.log("finalString", finalString);
  };
  reverseString2("Mary");
  reverString3ArrayV2("Rambo");
  /// array manipulation
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
  const removeDuplicate = (arr) => {
    var flatArray = arr.flat();
    var newArr = [];
    for (let i = 0; i < flatArray.length; i++) {
      if (newArr.indexOf(flatArray[i]) === -1) {
        newArr.push(flatArray[i]);
      }
    }
    console.log("newArr", newArr);
  };
  const removeDuplicateUsingFor = (arry) => {
    var flatArray = arry.flat();
    var uniqArr = [];
    for (let i = 0; i < arry.length; i++) {
      if (uniqArr.indexOf(flatArray[i]) - 1) {
        uniqArr.push(flatArray[i]);
      }
    }
    console.log("uniqArr", uniqArr.sort());
  };
  class Node {
    constructor(value) {
      this.head = value;
      this.next = null;
    }
  }
  class myLinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }

    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  }
  let newLinkedList = new myLinkedList(10);
  newLinkedList.push(30);
  console.log("newLinkedList", newLinkedList);
  removeDuplicateUsingFor(array);
  //JS Anagram check
  const anagramCheck = (str, str2) => {
    var a = str.toLowerCase();
    var b = str2.toLowerCase();
    if (a.length !== b.length) {
      console.log("Provided strings cannot be not anagram");
    } else {
      a = a.split("").sort().join("");
      b = b.split("").sort().join("");
      if (a === b) {
        console.log("a", a, "===", b, "b");
        console.log("Provided strings are anagram");
      }
    }
  };

  function isAnagramFn(str1, str2) {
    var a = str1.replace(/\s/g, "").toLowerCase();
    var b = str2.replace(/\s/g, "").toLowerCase();
    if (a.length !== b.length) {
      console.log("Provided string can not be anagram");
      return;
    } else {
      a = a.split("").sort().join("");
      b = b.split("").sort().join("");
      if (a === b) {
        console.log(a, "===", b);
        console.log("Provided strings are anagram");
      } else {
        console.log("Oops somethign went wrong");
      }
    }
  }
  const finalAnaGramCheck = (str,str2) =>{
    var a = str.replace(/\s/g,"").toLowerCase()
    var b = str2.replace(/\s/g,"").toLowerCase()
    if(a.length !== b.length){
      console.log('cant be anagrams')
    } else{
      a = a.split("").sort().join("")
      b = b.split("").sort().join("")
      if(a === b){
        console.log(a,'=',b)
        console.log('are anagrams')
      }
    }
  }
  finalAnaGramCheck('pot','otp')
  //isAnagramFn('Army','Mary')
  //anagramCheck("Mary", "Army");
  return <div>Check console for better undestanding</div>;
}

export default JSInterview1;
