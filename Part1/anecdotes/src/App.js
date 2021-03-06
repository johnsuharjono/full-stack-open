import React, { useEffect, useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [index, setIndex] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    for (let i = 0; i < points.length; i++) {
      if (points[i] > max) {
        setIndex(i);
        setMax(points[i]);
      }
    }
  }, [points, max]);

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = (props) => {
    let copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <>
      <h1>Anecdotes of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>This anecdote has {points[selected]} votes</div>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>next anecdote</button>

      <h1>Anecdotes with the most votes</h1>
      <div>{anecdotes[index]}</div>
      <p>This anecdotes have {max} votes</p>
    </>
  );
};

export default App;
