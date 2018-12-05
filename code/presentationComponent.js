import React from "react";

const Presenter = ({ counter, onClick, toggled }) => (
  <div>
    <div>Counter is {counter}</div>
    <div>Toggled? {toggled ? 'Yes' : 'No'}</div>
    <button onClick={onClick}>Do stuff</button>
  </div>
);

export default Presenter;
