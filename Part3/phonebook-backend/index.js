const express = require("express");
const app = express();

app.use(express.json());

let persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

const generateId = () => {
	const id = Math.floor(Math.random() * 1000000);
	return id;
};

app.get("/", (request, response) => {
	response.send("<h1>This is the homepage</h1>");
});

app.get("/api/persons", (request, response) => {
	response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	const person = persons.find((person) => person.id === id);

	if (person) {
		response.json(person);
	} else {
		response.status(404).end();
	}
});

app.get("/info", (request, response) => {
	const currentDate = new Date();
	response.send(
		`
            <div>
                <p>Phonebook has info for ${persons.length} people</p>
            </div>
            <div>
                <p>${currentDate}</p>
            </div>`
	);
});

app.delete("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter((person) => person.id !== id);

	response.status(204).end();
});

app.post("/api/persons", (request, response) => {
	const body = request.body;
	console.log(body);

	if (!body.name || !body.number) {
		return response.status(400).json({
			error: "content missing",
		});
	}

	if (persons.filter((person) => person.name === body.name).length > 0) {
		return response.status(400).json({
			error: "name already exist",
		});
	}

	const person = {
		id: generateId(),
		name: body.name,
		number: body.number,
	};

	persons = persons.concat(person);
	console.log(person);
	response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
