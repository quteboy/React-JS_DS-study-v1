import React from "react";

const AccentureInterviewPrep = () => {
  // remove the duplicate
  let arr = [1, 2, 4, 5, 1, 7, 1, 2, 7];
  const finalArr = arr.filter(
    (item, index, self) => self.indexOf(item) === index
  );
  console.log("finalArr", finalArr);
  // remove the sentence without reversing the sequence

  let str = "Welcome to Javascript !";
  let finalStr = str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  console.log("finalStr", finalStr);
  //call apply bind
  let name = {
    name: "Zaid",
    lastName: "Shaikh",
  };
  let printFullName = function (address) {
    console.log("==>", this.name + " " + this.lastName + " " + address);
  };
  printFullName.call(name, "Pune"); /// call
  printFullName.apply(name, ["Pune, Hinjewadi"]); /// apply

  let printName = printFullName.bind(name, "Delhi");
  printName();

  const checkPalindrome = (str) => {
    let revStr = str.split("").reverse().join("");
    if (revStr == str) {
      console.log("Given string is palindrome");
    } else {
      console.log("not a Palindrome");
    }
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    if (newStr == str) {
      console.log("Given string is palindrome for loop");
    } else {
      console.log("not a Palindrome");
    }
  };
  checkPalindrome("racecar");
  return <div>AccentureInterviewPrep</div>;
};

export default AccentureInterviewPrep;
