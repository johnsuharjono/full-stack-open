import axios from "axios";

const Persons = (props) => {
	const contactToShow = props.contactToShow;
	const setPersons = props.setPersons;
	const persons = props.persons;
	const handleDelete = (id) => {
		if (
			window.confirm(
				`Do you really want to delete ${
					persons.find((person) => person.id === id).name
				}?`
			)
		) {
			axios.delete(`http://localhost:3001/persons/${id}`);
			setPersons(persons.filter((person) => person.id !== id));
		}
	};
	return (
		<ul>
			{contactToShow.map((person) => (
				<li key={person.name}>
					{person.name} {person.number}{" "}
					<button onClick={() => handleDelete(person.id)}>
						Delete contact
					</button>
				</li>
			))}
		</ul>
	);
};

export default Persons;
