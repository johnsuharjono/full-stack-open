import React, { useState } from "react";

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}%</td>
        </tr>
      </>
    );
  } else {
    return (
      <>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </>
    );
  }
};

const Statistics = (props) => {
  if (props.good || props.bad || props.total) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="total" value={props.total} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive * 100} />
        </table>
      </div>
    );
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
  };

  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = good / total;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
