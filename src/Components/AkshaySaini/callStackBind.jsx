import React from "react";

const CallApplyBind = () => {
  let name = {
    name: "James",
    lastName: "Bond",
    printFullName: function () {
      console.log(this.name + " " + this.lastName);
    },
  };
  name.printFullName();
  return <div>callStackBind</div>;
};

export default CallApplyBind;
