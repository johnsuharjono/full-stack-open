import React, { useState, useEffect } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import "./App.css";
import personService from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	useEffect(() => {
		personService.getAll().then((persons) => {
			setPersons(persons);
		});
	}, []);

	const addContact = (event) => {
		event.preventDefault();

		let check = persons.filter(
			(person) => person.name.toLowerCase() === newName.toLowerCase()
		);
		if (check.length === 1) {
			if (window.confirm("Edit the number?")) {
				const id = check[0].id;
				const person = persons.find((person) => person.id === check[0].id);
				const personObject = { ...person, number: newNumber };
				personService.update(id, personObject).then((response) => {
					setPersons(
						persons.map((person) => (person.id !== id ? person : response.data))
					);
					setNewName("");
					setNewNumber("");
				});
			}
		} else {
			const personObject = {
				name: newName,
				number: newNumber,
			};

			personService.create(personObject).then((res) => {
				setPersons(persons.concat(res.data));
				setNewName("");
				setNewNumber("");
			});
		}
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};

	const contactToShow = persons.filter((person) =>
		person.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div className="App">
			<h2>Phonebook</h2>

			<Filter filter={filter} handleFilterChange={handleFilterChange} />

			<h3>Add a new</h3>

			<PersonForm
				addContact={addContact}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>

			<h3>Numbers</h3>

			<Persons
				persons={persons}
				setPersons={setPersons}
				contactToShow={contactToShow}
			/>
		</div>
	);
};

export default App;
