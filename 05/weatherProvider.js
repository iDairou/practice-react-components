const url = "https://api.weatherbit.io/v2.0/current";
const apiKey = "4c4e3b7674f04021a9256e4ab34711f0";

export function getData(lat, lon) {
	return fetchData(lat, lon);
}

function fetchData(lat = "", lon = "", options = { method: "GET" }) {
	const path = url + `?key=${apiKey}&lat=${lat}&lon=${lon}`;
	const promise = fetch(path, options);

	return promise
		.then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		})
		.catch((err) => console.log(err))
		.finally(() => {
			console.log("Api call finished");
		});
}
