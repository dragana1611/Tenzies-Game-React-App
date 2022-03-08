import React from "react";
import ReactDOM from "react-dom";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#b5a7b6" : "white",
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
