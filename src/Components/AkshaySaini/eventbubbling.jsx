import React from "react";

const Eventbubbling = () => {
  return (
    <div>
      <div id="grandparent">
        <div id="parent">
          <div id="child"></div>
        </div>
      </div>
    </div>
  );
};

export default Eventbubbling;
