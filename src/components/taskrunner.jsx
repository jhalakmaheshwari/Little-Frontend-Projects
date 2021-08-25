import React from "react";

// helping tutorial: https://dev.to/ycmjason/limit-concurrent-asynchronous-calls-5bae
const totalTasks = 12;
class TaskRunner extends React.Component {
  constructor(props) {
    super(props);
  }

  asyncTask = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.renderProgressBar();
        this.fillBar(1);
        resolve();
      }, Math.floor(2000));
    });
  };

  asyncLimit = (fn, n) => {
    let pendingPromises = [];
    return async function (...args) {
      while (pendingPromises.length >= n) {
        await Promise.race(pendingPromises).catch(() => {});
      }
      const p = fn.apply(this, args);
      pendingPromises.push(p);
      await p.catch(() => {});
      pendingPromises = pendingPromises.filter((pending) => pending !== p);
      return p;
    };
  };

  concurrentTaskRunner = async (n) => {
    let modifiedScheduler = this.asyncLimit(this.asyncTask, n);
    for (let i = 0; i < totalTasks; i++) {
      modifiedScheduler();
    }
  };

  fillBar = (seconds) => {
    const barElement = document.querySelector(".bar");
    let atPercent = 0;
    const interval = setInterval(() => {
      barElement.style.width = atPercent + "%";
      atPercent++;
      // console.log("progress at ", atPercent);
      if (atPercent >= 100) {
        clearInterval(interval);
      }
    }, (seconds * 1000) / 100);
  };

  renderProgressBar = () => {
    const divElem = document.getElementsByClassName("append");
    const template = '<div class="bar-container"><div class="bar" /></div>';
    divElem[0].insertAdjacentHTML("afterbegin", template);
  };

  render() {
    return (
      <div>
        ASYNC Task Runner
        <button onClick={() => this.concurrentTaskRunner(3)}>
          {" "}
          Run Task Runner{" "}
        </button>
        <div className="append"></div>
      </div>
    );
  }
}

export default TaskRunner;
