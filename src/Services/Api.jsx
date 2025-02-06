import axios from "axios";

export async function success(position, setLocation, setContinent) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const API_KEY = "4cf5d409c0414717b0e39cc6b8b57946";

  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
    );

    if (response.data.results.length > 0) {
      const city =
        response.data.results[0].components.city ||
        response.data.results[0].components.town ||
        response.data.results[0].components.village;

      const country = response.data.results[0].components.country;
      const continent = response.data.results[0].components.continent;
      setLocation(`${city}, ${country}`);
      setContinent(`${continent}/${city}`);
    } else {
      setLocation("Location not found");
    }
  } catch (error) {
    setLocation("Failed to fetch location");
  }
}
