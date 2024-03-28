import React from "react";

const JSArrayFilter = () => {
  // JS filter method
  // prints students with marks greater than 60
  let student = [
    { name: "Smith", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "John", rollNumber: 16, marks: 35 },
    { name: "Tiger", rollNumber: 7, marks: 55 },
  ];
  const finalArr = student.filter((x) => {
    return x.marks >= 60;
  });
  console.log(finalArr);
  return <div>JSArrayFilter</div>;
};

export default JSArrayFilter;
