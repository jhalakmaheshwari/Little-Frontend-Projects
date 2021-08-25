import React from "react";

class PollingWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question: "What is your favorite animal?",
          answers: [
            { name: "Panda", votes: 0, pct: 0 },
            { name: "Iguana", votes: 0, pct: 0 },
            { name: "Grizzly Bear", votes: 0, pct: 0 },
            { name: "Ostrich", votes: 0, pct: 0 },
            { name: "Leopard", votes: 0, pct: 0 },
            { name: "Fox", votes: 0, pct: 0 }
          ]
        },
        {
          question: "What is your favorite animal?",
          answers: [
            { name: "Panda", votes: 0, pct: 0 },
            { name: "Iguana", votes: 0, pct: 0 },
            { name: "Grizzly Bear", votes: 0, pct: 0 },
            { name: "Ostrich", votes: 0, pct: 0 },
            { name: "Leopard", votes: 0, pct: 0 },
            { name: "Fox", votes: 0, pct: 0 }
          ]
        }
      ]
    };
  }

  onSelect = (event, index) => {
    let question = this.state.questions;
    question[index].answers = question[index].answers.map((answer) => {
      if (answer.name === event.target.value) answer.votes++;
      return answer;
    });
    this.setState({
      questions: question
    });
  };

  render() {
    const { questions } = this.state;
    return (
      <div>
        {" "}
        PollingWidget
        {questions.map((qObject, index) => (
          <div className="question">
            <p>{qObject.question}</p>
            {qObject.answers.map((option) => (
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value={option.name}
                  className="form-check-input"
                  onClick={(e) => this.onSelect(e, index)}
                />
                {option.name} {option.votes}
                <br />
              </label>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PollingWidget;
