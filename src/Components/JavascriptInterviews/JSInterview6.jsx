import React from "react";

const JSInterview6 = () => {
  //! JavaScript array questions

  /***
   * * Remove Duplicate from Array
   */
  var tempArray = ["Apple", "Mango", "Peach", "Banana", "Banana", "Apple"];
  var uniqueArray = [...new Set(tempArray)]; /// using new Set
  const uniqueArray2 = tempArray.filter((item, index) => {
    return tempArray.indexOf(item) === index;
  });
  const uniqueArray3 = tempArray.filter((item, index) => {
    return tempArray.indexOf(item) === index;
  });
  const unqArry = tempArray.filter((item, index) => {
    return tempArray.indexOf(item) === index;
  });
  const isPalindrome = (string) => {
    var reverseString = string.split("").reverse("").join("");
    if (string === reverseString) {
      return true;
    } else {
      return false;
    }
  };
  // two pointer check
  const isPalindrome2 = (string) => {
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
      if (string[left] !== string[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  // two pointer check
  const isPalindrome3 = (string) => {
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
      if (string[left] !== string[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  //flatten the nested array
  let nestedArray = [1, [2, [3, [4, 5]]], 6];
  const flattenArray = (arr) => {
    //using arr.flat()
    var resp = arr.flat(Infinity);
    //recursion
    let result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flattenArray(item));
      } else {
        result.push(item);
      }
    });
  };
  const flatArr = (arr) => {
    //using flat
    var resp2 = arr.flat(Infinity);
    //using recursion
    let result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flatArr(item));
      } else {
        result.push(item);
      }
    });
  };
  return <div>JSInterview6</div>;
};

export default JSInterview6;
