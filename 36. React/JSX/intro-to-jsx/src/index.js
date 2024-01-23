import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const fName = "Emre";

const lName = "Karam";

const luckNum = 3;

const currentDate = new Date();

const currentYear = currentDate.getFullYear();

const currentTime = currentDate.getHours();

const randomImg = "https://picsum.photos/200";

const customStyleTest = {
  color: "red",
  fontSize: "15px",
  border: "1px solid black",
};

var styleTime = {
  color: "",
  fontSize: "",
};

var timeMessage = "";

if (currentTime < 12) {
  // 0-11 is AM
  styleTime.color = "red";
  styleTime.fontSize = "20px";
  timeMessage = "Good Morning";
} else if (currentTime < 18) {
  // 12-17 is PM
  styleTime.color = "green";
  styleTime.fontSize = "20px";
  timeMessage = "Good Afternoon";
} else {
  // 18-23 is PM
  styleTime.color = "blue";
  styleTime.fontSize = "20px";
  timeMessage = "Good Night";
}

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {`${fName} ${lName}`}'s React Note
    </h1>
    <ul>
      <li>This is how we make list</li>
      <li>Another bullet point example</li>
    </ul>
    <p>This is how we put expression example: {luckNum}</p>
    <p>Random number: {Math.floor(Math.random() * 10)}</p>
    <p>Copyright year {currentYear}</p>
    <div>
      <img
        className="test-img"
        src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
        alt="random"
      />
      <img
        className="test-img"
        src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
        alt="random"
      />
      <img src={randomImg + "?grayscale"} alt="Gray Scale Random" />
    </div>
    <h4 style={{ color: "blue" }}>Inline style change</h4>
    <h5 style={customStyleTest}>Custom style object</h5>
    <h1 className="timeMachine" style={styleTime}>{timeMessage}</h1>
  </div>,
  document.getElementById("root")
);
