import React from "react";

const CallApplyBind = () => {
  // call apply bind
  let name = {
    name: "James",
    lastName: "Bond",
  };
  let printFullName = function (hometown,state) {
    console.log(this.name + " " + this.lastName + " from " + hometown,state); // function allows this keyword
  };
  printFullName.call(name, "Chennai",'UP'); // invoke this method
  let name2 = {
    name: "Moneypenny",
    lastName: "Q",
  };
  printFullName.call(name2,'Dehradun','AP'); // function borrowing function is 1st arguemnt which points towards function rest of argument passed comma separated
  // using call method we can do function borrowing
  // function borrowing
  // take the function needs to be called
  // every method has access to .call keyword

  // the only diff between call and apply is the way pass arguments
  // in apply method we pass array of arguments as 2nd argument
  // apply blind
  printFullName.apply(name2,['Dehradun 2','Andra Pradesh 2'])
  // bind method
  // instead of calling it binds methods with object and returns to copy of method

  let printMyName = printFullName.bind(name2,'Dehradun 3','AP 3');
  console.log('printMyName',printMyName)
  printMyName()
  return <div>callStackBind</div>;
};

export default CallApplyBind;
