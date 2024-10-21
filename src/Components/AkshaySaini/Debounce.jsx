import React, { useState } from "react";

const DebounceHook = () => {
  const getData = () => {
    let counter = 0;
    console.log("Fetching the data", counter++);
  };

  const doMagic = function (fn, d) {
    let timer;

    return function (...args) {
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };
  const doMagic2 = (fn, d) => {
    let timer;
    return function (...args) {
      let context = this;
      clearInterval(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };

  const useDebounce = (fn, d) => {
    let timer;
    return function (...args) {
      let context = this;
      clearInterval(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };

  const useDebounce2 = (fn, d) => {
    let timer;
    return function (...args) {
      let context = this;
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };
  return (
    <div>
      Debounce
      <br />
      <input onKeyUp={doMagic(getData, 1000)} placeholder="Search" />
    </div>
  );
};

export default DebounceHook;
