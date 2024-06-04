import React, { useState } from "react";

const DebounceHook = () => {
  const getData = () => {
    /// call the API
    let counter = 0;
    console.log("Fetching the data", counter++);
  };

  const doMagic = function (fn, d) {
    let timer;

    return function (...args) {
      let context = this;
      args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, arguments);
      }, d);
    };
  };
  return (
    <div>
      Debounce
      <br />
      <input onKeyUp={doMagic(getData, 300)} placeholder="Search" />
    </div>
  );
};

export default DebounceHook;
