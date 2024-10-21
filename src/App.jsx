import { useState } from "react";
import "./App.css";
import JSInterview1 from "./Components/JavascriptInterviews/JSInterview1";
import JSInterview2 from "./Components/JavascriptInterviews/JSInterview2";
import JSInterview3 from "./Components/JavascriptInterviews/JSInterview3";
import JSInterview4 from "./Components/JavascriptInterviews/JSInterview4";
import JSArrayFilter from "./Components/JavaScriptArrays/JSArrayFilter";
import APIFetch1 from "./Components/APIFetch/APIFetch1";
import JavaScriptYTShort1 from "./Components/JavaScriptYTShorts/JavaScriptYTShort1";
import CallApplyBind from "./Components/AkshaySaini/callStackBind";
import DebounceHook from "./Components/AkshaySaini/Debounce";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <JSInterview1 />
      <JSInterview2 />
      <JSInterview3 />
      <JSInterview4 />
      <JSArrayFilter />
      {/* <APIFetch1 /> */}
      <JavaScriptYTShort1 />
      <CallApplyBind />
      <DebounceHook />
    </>
  );
}

export default App;
