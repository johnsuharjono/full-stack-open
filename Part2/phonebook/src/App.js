import React, { useState, useEffect } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import axios from "axios";
import "./App.css";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	useEffect(() => {
		async function getData() {
			console.log("effect");
			let response = await axios.get("http://localhost:3001/persons");
			console.log("promise fullfilled");
			setPersons(response.data);
		}

		getData();
	}, []);

	const addContact = (event) => {
		event.preventDefault();

		let check = persons.filter(
			(person) => person.name.toLowerCase() === newName.toLowerCase()
		);
		if (check.length === 1) {
			setNewName("");
			setNewNumber("");
			alert(`${newName} is already added to phonebook`);
		} else {
			const personObject = {
				name: newName,
				number: newNumber,
				id: persons.length + 1,
			};

			setPersons([...persons, personObject]);
			setNewName("");
			setNewNumber("");
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

			<Persons contactToShow={contactToShow} />
		</div>
	);
};

export default App;
