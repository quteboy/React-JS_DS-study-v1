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
  // return the number of repeated alphabets from given strings
  //! steps to solve
  //! a declare and an empty object
  //! start a for loop for to target each letter from string
  //!
  let str = "aabbcccddd";
  let obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  console.log(obj);

  const countChars = (val) => {
    let count = {};
    for (let char of val) {
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    console.log("count", count);
  };
  countChars(str);
  const charNumbers = (val) => {
    let count = {};

    for (let char of val) {
      // for loop to iterate over string to access each character
      if (count[char]) {
        count[char]++; // if variable already exist increase count by one
      } else {
        count[char] = 1; // if it is first occurance then set count 1
      }
    }
    console.log("count ==>", count);
  };
  charNumbers("aabccdeeaaaa");
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

  const countDupli1 = (arr) => {
    let count = {};

    for (let item of arr) {
      /// for..of loop
      if (count[item]) {
        count[item]++;
      } else {
        count[item] = 1;
      }
    }
    console.log("count", count);
    let dupli = {};
    for (let item in count) {
      if (count[item] > 1) {
        dupli[item] = count[item];
      }
    }
    console.log("dupli", dupli);
  };
  countDupli1(bikeArray);

  function dupliFun2(arr) {
    let count = {};

    for (let bike of arr) {
      if (count[bike]) {
        count[bike]++;
      } else {
        count[bike] = 1;
      }
    }
    let dupli = {};
    for (let bike in count) {
      if (count[bike] > 1) {
        dupli[bike] = count[bike];
      }
    }
    return dupli;
  }
  console.log("==>", dupliFun2(bikeArray));

  const removeDupliArr = (arr) => {
    let finalArr = arr.filter((item,index,self) => {
      return self.indexOf(item) === index
    })
    return finalArr.sort()
  }
  console.log('==>',removeDupliArr(bikeArray))

  const removeDup = (arr) => {
    let count = {}

    for (let item of arr) {
      if(count[item]){
        count[item]++
      } else {
        count[item] =1
      }
    }
    console.log('count',count)

  }
  removeDup(bikeArray)
  const countVowels = (strg) => {
    let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let char of strg.toLowerCase()) {
        if (vowels.hasOwnProperty(char)) {
          vowels[char]++
        }
    }
    return vowels
  }

  const countVowels2 = (str) => {
    let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let char of str.toLowerCase()) {
      if (vowels.hasOwnProperty(char)) {
        vowels[char]++
      }
    }
    return vowels
  }
  console.log(countVowels2('Mukha wate baher padnrya mul dhwanina vowels mahnatat'))
  console.log(countVowels('Tuhi ye mujhko bata de chahu mai yana aanko aanko me bata chahu mai ya na'))
  return <div>JSInterview6</div>;
};

export default JSInterview6;
