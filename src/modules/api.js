import { instantiateUIChanges, instantiate404Prompt } from "./ui"

async function getWeatherData(latitude, longitude) {
	try {
		const response = await fetch(
			"https://api.openweathermap.org/data/3.0/onecall?lat={"lat"}&lon={"lon"}&exclude={part}&appid={"521919ec5abc463b90c5b5141ff8e4cc" }"
		)

		if (response.ok) {
			const jsonData = await response.json()

			instantiateUIChanges(jsonData)

			return new Promise((resolve) => setTimeout(resolve, 1500))
		}
		throw new Error()
	} catch (error) {
		instantiate404Prompt("Location not found")
		return Promise.reject(error)
	}
}

async function getMatchingLocations(query) {
	try {
		const response = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`
		)
		const jsonData = await response.json()

		const location = jsonData["results"]

		const matches = {}

		if (location !== undefined) {
			location.forEach((loc) => {
				matches[
					`${loc.name}, ${
						loc.admin1 === undefined ? loc.country : loc.admin1
					}`
				] = [loc.latitude, loc.longitude]
			})
		}

		return matches
	} catch (error) {
		return {}
	}
}

export { getWeatherData, getMatchingLocations }
