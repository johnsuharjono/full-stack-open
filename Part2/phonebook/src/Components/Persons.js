const Persons = (props) => {
  const contactToShow = props.contactToShow;
  return (
    <ul>
      {contactToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
