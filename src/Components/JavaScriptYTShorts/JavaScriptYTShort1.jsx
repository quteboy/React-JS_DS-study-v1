import React from "react";

const JavaScriptYTShort1 = () => {
  // Short 208 Question fix below code
  function showMsg(marks) {
    const message = marks || "Absent";
    console.log(`Marks ${message}`);
  }
  showMsg(20); // 20
  showMsg(0); // Absent
  showMsg(21); // 20
  // it should print marks not absent
  //Answer replace ||(or) operator with null falsy operator in js 0 is falsy value
  function showMsgAnswer(marks) {
    const msg = marks ?? "Absent";
    console.log(`Marks ${msg}`);
  }
  showMsgAnswer(20); // Marks 20
  showMsgAnswer(0); // Marks 0
  showMsgAnswer(21); // Marks 20

  //Short 207
  const runThisCode = () => {
    return (100)["toString"].length + 1; // problem
    /// when accessing function length it return the length of arguments passed
    /// array.length is 1 and +1 will become 2
    ///output 2
  };
  ///Short 206 show output
  runThisCode();
  var foo = "lion";
  function showName() {
    foo = "panda";
    return;
    function foo() {}
  }
  showName();
  console.log("foo", foo); // lion
  // why ? foo is local variable function take priority in hoisting variable is converted into function

  //Short 205 find number of vowels in given string
  // answer below
  const str = "Hey JS ! its awesome";
  const vowels = ["a", "e", "i", "o", "u"];
  const findVowels = (str) => {
    let count = 0;
    str
      .toLowerCase()
      .split("")
      .forEach((element) => {
        vowels.includes(element) && count++;
      });
    return count;
  };
  console.log("findVowels", findVowels(str));
  /** *** Solution
   *  ! declare initial count as zero
   *  ! convert given string to lowerCase then to array then
   *  ! use ForEach loop over every to element
   *  ! usin includes method on vowels and pass element as argument in includes if element is includes then increase the count by 1
   */

  // short 204 question is timer will suspend when user switches the tab
  const runInterval = () => {
    let num = 0;
    setInterval(() => {
      console.log("num", num++);
    }, 100);
  };
  //runInterval() // yes timer and interval will suspend when user switches the tab
  // short 203
  //console.log(randomVariable) /// you can cant read variable before initilization
  // short 202
  function jsIsAwesome() {
    console.log("Hie");
  }
  console.log(jsIsAwesome.name); // jsIsAwesome
  /// you can cache the function call

  //short 201
  const obj = Object.create(null);
  const keyCheck = "someKey";
  /**
 * 
if (obj.hasOwnProperty(keyCheck)) {
    console.log('Key found')
} else {
    console.log('key did not found')
} // it will throw error because
*/
  /**
   * ! object declared using Object.create() has no prototype inheritance its plain empty object
   */
  // short 200 find the ouput
  const newObj = {};
  let key = "Key Name";

  if (key in newObj) {
    console.log("Key Found");
  } else {
    console.log("Key did not found");
  }
  // it will print key found
  //answer
  if (Object.hasOwn(newObj, key)) {
    console.log("Key Found");
  } else {
    console.log("Did not found");
  }
  //short 199
  const short199 = () => {
    var numb = 21;
    console.log(numb.toString()); // '21'
    console.log(numb.toString(2)); // 1010 binary string expects an argument to decide number system stringify the given number
  };
  short199();
  //short 198
  function short198() {
    const promise = new Promise((_, reject) => {
      reject();
    });
    var resp = promise
      .then((data) => {
        console.log("first then"); // first then
      })
      .catch((error) => {
        console.log("Error::", error);
      })
      .then((data) => {
        console.log("then after catch"); // then after catch
      });
    console.log("resp", resp);
    /**
     * ? then block represents a resolved promise
     * * catch block also represents a resolved promise
     *  ! catch block can further chained with more then blocks
     */
  }
  short198();
  function short197(){
    console.log([41,31] > [89]) // false
    console.log([3] > [2]) // true
    /**
     * ? when comparing array using > symbol javascript converts array type coersion into strings and compare them string by string
     */
  }
  short197()
  function short196(){
    function isPass(){
        console.log('he passed')
        return 'Passed'
    }
    function isTopper(){
        console.log('he is topper')
        return 'Topper'
    }
    const msg = isPass() && isTopper()
    console.log(`Msg is ${msg}`) // Msg is Topper
    /**
     * ! when 2 functions are executed together using && operator 1st function executes 1st by default its value is assigned to expression
     * ! and if 1st function is returning its value it becomes value for that expression
     * ! and if 2nd function is also returning value then previous value given by 1st function get overriden by 2nd function
     * ! thats why the output is topper
     * ! if 1st function returned empty string then empty string would have treated falsy so 2nd functions value would get assigned to expression
     */
  }
  short196()
  function short195(){
    const x = (1,2,3,4)
    console.log('x =',x) // 4 
    /**
     * * value every value is assigned to x one by one the last value will becomes it final or default value
     */
  }
  short195()
  function short194(){
    let {x,x:y} = {x:2}
    console.log('x', x) // 2
    console.log('y', y) // 2
    /**
     * ! in javascript you can destructure the same object key many time as long as you use different identifier as above
     */
  }
  short194()
  return <div>Check Console log</div>;
};

export default JavaScriptYTShort1;
