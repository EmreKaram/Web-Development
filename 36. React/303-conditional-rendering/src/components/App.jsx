import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  //isLoggedIn is bool so we can simplify like that (isLoggedIn === true)
  return (
    <div className="container">
      {
        //Ternary
        //isLoggedIn ? <h1>Hello</h1> : <Login />
        //AND Operator
        //currentTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
