import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p>
        I can eat...like...{Math.floor(Math.random() * 30)}
        hot dogs in one sitting
      </p>
      <p onClick={props.click}>
        I 'm {props.name} and I' m {props.age}
        years old
      </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} value={props.name} />{" "}
    </div>
  );
};

export default person;
