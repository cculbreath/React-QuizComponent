import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd.js";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  render() {
    const isQuizEnd =
      this.state.quizposition - 1 == quizData.quiz_questions.length;
    return (
      <div>
        if(isQuizEnd)
        {
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
          />
        }
        else {<QuizEnd />}
      </div>
    );
  }
}
export default Quiz;
