import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  handleClick(buttonText){
    if (buttonText === this.props.quiz_question.answer) this.props.showNextQuestionHandler()
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
          {this.props.quiz_35question.answer_options.map((val, key) => <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={key} button_text={val}/>)}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
