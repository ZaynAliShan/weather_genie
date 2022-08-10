/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
let city_address = document.getElementById('city-name')
let weather_type = document.getElementById('weather-type')
let humidity = document.getElementById('humidity')
let temperature = document.getElementById('temp')
let feels_like = document.getElementById('feelslike')


getWeatherData = (city) => {
  // (250 requests/month)
  // 48b013e35087d1966b42f9e1b6227b93 

  // 153eab6486bdb44db9733990f717f4a5 (2nd Account)
  const URL = `http://api.weatherstack.com/current?access_key=153eab6486bdb44db9733990f717f4a5&query=${city}`
  return fetch(URL)
  .then(response => response.json())
	.then(data => data)
	.catch(err => console.error(err));
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  
  const data = await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (data) => {
  //CODE GOES HERE
  console.log(data)
  city_address.innerHTML = `<h4 id="city-name" class="my-0 font-weight-normal"><img src="location.gif" width="35px" height="35px"> ${data.location.name}, ${data.location.country}</h4>`
  // city_address.innerText = `${data.location.name}, ${data.location.country}`
  weather_type.innerText = data.current.weather_descriptions[0]
  humidity.innerText = data.current.humidity
  temperature.innerText = data.current.temperature
  feels_like.innerText = data.current.feelslike
}


