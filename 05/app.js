import React from "react";
import { createRoot } from "react-dom/client";
import { getData } from "./weatherProvider";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
	state = {
		data: null,
		latitude: "52.232222",
		longitude: "21.008333",
	};

	componentDidMount = () => {
		this.fetchWeather();
		console.log(this.state.data);
	};

	fetchWeather = () => {
		const { latitude, longitude } = this.state;
		getData(latitude, longitude).then((resp) => {
			this.setState({ data: resp.data[0] });
		});
	};

	inputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	fillCoordinates = (lat, lon) => {
		this.setState({
			latitude: lat,
			longitude: lon,
		});
	};

	render() {
		const { data, latitude, longitude } = this.state;

		const exampleCities = [
			{ name: "Warszawa", lat: "52.232222", lon: "21.008333" },
			{ name: "Kraków", lat: "50.049683", lon: "19.944544" },
			{ name: "Gdańsk", lat: "54.372158", lon: "18.638266" },
		];

		return (
			<div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
				<div
					style={{
						marginBottom: "20px",
						padding: "10px",
						backgroundColor: "#f0f0f0",
					}}
				>
					<strong>Przykładowe współrzędne:</strong>
					<ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
						{exampleCities.map((city) => (
							<li key={city.name}>
								{city.name}: {city.lat}, {city.lon}
								<button
									onClick={() => this.fillCoordinates(city.lat, city.lon)}
								>
									Wstaw
								</button>
							</li>
						))}
					</ul>
				</div>

				<div style={{ marginBottom: "20px" }}>
					<input
						name="latitude"
						placeholder="Szerokość"
						value={latitude}
						onChange={this.inputChange}
					/>
					<input
						name="longitude"
						placeholder="Długość"
						value={longitude}
						onChange={this.inputChange}
					/>
					<button onClick={this.fetchWeather}>Szukaj</button>
				</div>

				{data ? (
					<>
						<h1>{data.city_name}</h1>
						<p>
							<strong>Data:</strong> {data.datetime}
						</p>
						<p>
							<strong>Temperatura:</strong> {data.temp}°C
						</p>
						<p>
							<strong>Opis:</strong> {data.weather.description}
						</p>
					</>
				) : (
					<p>Ładowanie danych...</p>
				)}
			</div>
		);
	}
}

root.render(<App />);
