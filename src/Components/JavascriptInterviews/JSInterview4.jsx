import React from "react";

const JSInterview4 = () => {
  /**
   * 
   *  array = [
     { Id: "001", qty: 1 },
     { Id: "002", qty: 2 },
     { Id: "001", qty: 2 },
     { Id: "003", qty: 4 }
    ];
    OUTPUT:-  array = [
   	    { Id: "001", qty: 3 },
    	    { Id: "002", qty: 2 },
    	    { Id: "003", qty: 4 }
         ];
   */
  const inputArray = [
    { Id: "001", qty: 1 },
    { Id: "002", qty: 2 },
    { Id: "001", qty: 2 },
    { Id: "003", qty: 4 },
  ];
  const outputArray = inputArray.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.Id === curr.Id); /// check for existing id in accumulator array
    console.log("existingItem", existingItem);
    if (existingItem) {
      // if an item with same id exists
      existingItem.qty += curr.qty; // add quantity of current item to existing item
    } else {
      // if item with same id does not exist
      // push a new obj with id and qty prp to accumulator array
      console.log("i ran");
      acc.push({ Id: curr.Id, qty: curr.qty });
    }
    // return accumulator for next iteration
    return acc;
  }, []);
  const outputArr = inputArray.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.Id === curr.Id);
    if (existingItem) {
      existingItem.qty += curr.qty;
    } else {
      acc.push({ Id: curr.Id, qty: curr.qty });
    }
    return acc;
  }, []);
  const output3 = inputArray.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.Id === curr.Id);
    if (existingItem) {
      existingItem.qty += curr.qty;
    } else {
      acc.push({ Id: curr.Id, qty: curr.qty });
    }
    return acc;
  }, []);
  console.log(outputArray);
  console.log(3 > 2 > 1); // false why ?
  /**
   * * 3 > 2 will return true
   *  * true > 1 Javascript will type coerce the true into 1
   *  * 1 > 1 is not greater than 1 so it will log false
   */
  // console.log(a);
  // a = 10;
  // const a; will throw error as const has not initialized
  /// amdocs
  //1 merge 2 obj without inbuilt method
  let obj1 = { name: "karan", lastName: "negi" };
  let obj2 = { age: "26", occupation: "developer" };
  const mergedObj = (obj2, obj3) => {
    const finalObj = { ...obj2, ...obj3 };
    console.log("finalObj", finalObj);
  };
  mergedObj(obj1, obj2);
  const combineObj = (Obj1, Obj2) => {
    const finalOtp = { ...Obj1, ...Obj2 };
    console.log(finalOtp);
  };
  combineObj(obj1, obj2);
  // write a function to writeen any value between min max but not min max
  let arr = [1, 3, 5, 7, 9];

  const betMinMax = (ar) => {
    let max = Math.max(...ar);
    let min = Math.min(...ar);
    const newArr = [];
    for (let value of ar) {
      if (value !== min && value !== max) {
        newArr.push(value);
      }
    }
    return [...newArr];
  };
  const minMax = (ar) => {
    let min = Math.min(...ar);
    let max = Math.max(...ar);
    const newArr = [];
    for (let value of ar) {
      if (value !== min && value !== max) {
        newArr.push(value);
      }
    }
    return newArr;
  };
  console.log(betMinMax(arr));
  console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
  // find 2nd highest number in Array
  const numbArr = [1, 7, 8, 5];
  function findSecondHigh(arr) {
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    var secondMax = Math.max.apply(null, arr);
    console.log("secondMax", secondMax);
    return secondMax;
  }
  findSecondHigh(numbArr);
  // using sort
  const usingSort = (arr) => {
    const sortedArry = arr.sort();
    var length = sortedArry.length;
    var secondHigh = sortedArry[length - 1];
    console.log("secondHigh", secondHigh);
  };
  /// find 2nd highest number from array
  let givenArray = [12, 17, 22, 28, 14, 24, 26, 30];
  const findSecondHigh2 = (arr) => {
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    var secondMax = Math.max.apply(null, arr);
    console.log("secondMax", secondMax);
    return secondMax;
  };
  console.log("findSecondHigh2", findSecondHigh2(givenArray));
  usingSort(numbArr);
  const hightSort = (arr) =>{
    const sortedArr = arr.sort()
    var length = sortedArr.length
    var maxSecond = sortedArr[length - 1]
    console.log('maxSecond',maxSecond)
    return maxSecond
  }
  console.log(hightSort(givenArray))
  return <div>JSInterview4</div>;
};

export default JSInterview4;
