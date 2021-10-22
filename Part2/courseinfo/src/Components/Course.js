const Course = (props) => {
  const course = props.course;
  const Header = (props) => {
    return <h2>{props.course}</h2>;
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
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  };

  const Total = (props) => {
    let parts = props.parts;
    const total = parts.reduce((s, p) => s + p.exercises, 0);
    return <h4>Total of {total} exercises</h4>;
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
