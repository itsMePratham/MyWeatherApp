   export  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

//    export  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';


//    weather api

   export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
   export const WEATHER_API_KEY = "b509ef7c3e3d531d43baa6c3a50ff1cd";


  export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '294811050dmsha8a1e1245ca8155p1340f7jsnb8ada4902c1a',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// return fetch('/cities',geoApiOptions)
// .then(response => response.json())
// .then(response =>console.log(response))
// .catch(err => console.error(err));