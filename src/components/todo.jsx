import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  createToDo = () => {
    const inputElem = document.getElementById("todoinput");
    console.log(inputElem.value);
    const data = inputElem.value;
    let records = this.state.todoList;
    records.push(data);
    this.setState({
      todoList: records
    });
  };

  deleteToDo = (index) => {
    console.log(index);
    let records = this.state.todoList;
    records.splice(index, 1);
    console.log(records);
    this.setState({
      todoList: records
    });
  };

  render() {
    console.log(this.state.todoList);
    return (
      <div>
        <h3>Enter a Todo</h3>
        <div>
          <input type="text" id="todoinput" />
          <button type="submit" onClick={this.createToDo}>
            Add Todo
          </button>
        </div>
        <div class="todolist">
          <ul style={{ "list-style-type": "none" }}>
            {this.state.todoList &&
              this.state.todoList.map((record, index) => {
                return (
                  <li key={index}>
                    <span>{record}</span>
                    <button
                      type="submit"
                      onClick={() => this.deleteToDo(index)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
