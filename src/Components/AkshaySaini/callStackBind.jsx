import React from "react";

const CallApplyBind = () => {
  // call apply bind
  let name = {
    name: "James",
    lastName: "Bond",
    printFullName: function () {
      console.log(this.name + " " + this.lastName);
    },
  };
  name.printFullName();
  let name2 = {
    name:'Moneypenny',
    lastName:'Q'
  }
  // function borrowing
  name.printFullName.call(name2)
  return <div>callStackBind</div>;
};

export default CallApplyBind;
