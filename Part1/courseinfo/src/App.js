import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  let name = props.name;
  let exercises = props.exercises;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = (props) => {
  let parts = props.parts;
  return (
    <div>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercise is {props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  let total = 0;
  course.parts.forEach((element) => (total += element.exercises));
  console.log(total);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
