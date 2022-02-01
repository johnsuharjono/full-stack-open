import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [countries, setCountries] = useState([]);
	const [query, setQuery] = useState("");
	const handleQueryChange = (e) => setQuery(e.target.value);

	const countriesToShow = countries.filter((country) =>
		country.name.common.toLowerCase().includes(query.toLowerCase())
	);

	useEffect(
		() =>
			axios.get("https://restcountries.com/v3.1/all").then((response) => {
				setCountries(response.data);
			}),
		[] // only run when the program first run
	);
	const show =
		countriesToShow.length > 10 ? (
			<div>Too many countries, please be more specific</div>
		) : countriesToShow.length === 1 ? (
			<div>
				{countriesToShow.map((country) => (
					<>
						<h3>{country.name.common}</h3>
						<p>capital {country.capital}</p>
						<p>population {country.population}</p>
						<h3>Language spoken: </h3>
						{Object.keys(country.languages).map((key) => (
							<li>{country.languages[key]}</li>
						))}
						<img src={country.flags.png} alt="Flag"></img>
					</>
				))}
			</div>
		) : (
			countriesToShow.map((country) => {
				return (
					<li>
						{country.name.common}
						{"   "}
						<button
							onClick={() => {
								setQuery(country.name.common);
							}}
						>
							Show
						</button>
					</li>
				);
			})
		);

	return (
		<div className="App">
			<div>
				Find Countries{" "}
				<input onChange={handleQueryChange} value={query}></input>
			</div>
			{show}
		</div>
	);
}

export default App;
