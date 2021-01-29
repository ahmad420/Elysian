import React, { useState, useEffect } from "react";
import "./style.css";

const QuestionDiv = (props) => {
  const [marked, setMarked] = useState("");
  const secondStep = () => {
    let question = props.question;
    // if stepCounter = 2, we should show the key word
    let qDiv = document.getElementById("Q");
    let questionWordArr = question;
    let markedQuestion = "";
    if (props.stepsCounter == 2) {
      questionWordArr.split(" ").map((word) => {
        if (word == props.keyword) {
          console.log("keyword!!!!", word);
          return (markedQuestion +=
            " " + `<span style='color:red'>${word}</span>`);
        } else {
          return (markedQuestion += " " + word);
        }
      });
    }
    console.log("Im colored :)", markedQuestion);
    setMarked(markedQuestion);
    qDiv.innerHTML = markedQuestion;
  };
  useEffect(() => {
    if (props.stepsCounter == 2) {
      secondStep();
    }
  }, [props.stepsCounter]);

  return (
    <div className="questionDiv">
      {props.stepsCounter >= 2 ? (
        <h1 id="Q" className="questionContent"></h1>
      ) : (
        <h1 id="Q" className="questionContent">
          {props.question}
        </h1>
      )}
    </div>
  );
};

export default QuestionDiv;
