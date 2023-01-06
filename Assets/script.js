// Open Weather API Key 'f65b142e1803ffb4f8713795f5973a88'
const myAPIKey = 'f65b142e1803ffb4f8713795f5973a88';


// let myButton = document.getElementById('js-submit-city');
// or I can do this 
let myButton = document.querySelector('#js-submit-city')

myButton.addEventListener('click', getCityLatLon); 

  function getCityLatLon() {
    //grab value from input field
    let citySearchInput = document.getElementById('js-search-city');
    let cityName = citySearchInput.value
    // console.log(cityName)

    //create API Geocode API string with city name
    // let geocodeAPIURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&appid=f65b142e1803ffb4f8713795f5973a88'
    const geocodeAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPIKey}&units=imperial`;


    //pass API to a fetch call
    fetch(geocodeAPIURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        // console.log(data.coord.lat)
        // console.log(data.weather)
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        // console.log("This is my temp " + data.main.temp); // gets me my temperature
        // console.log("This is my wind speed " + data.wind.speed)  // gets me my wind speed
        // console.log("This is my humidity " + data.main.humidity) // gets me my humidity
        getCityWeatherData(lat, lon);
        
        let mainTemp = document.createElement('p');
        mainTemp.setAttribute(
          'style', 
          'background-color: blue; color: white; width: 175px; height: 25px; margin-left: 5px; padding-left: 5px'
        )
        mainTemp.innerText = `Temperature: ${data.main.temp}°`;
        document.body.appendChild(mainTemp);

        let windSpeed = document.createElement('p');
        windSpeed.setAttribute(
          'style', 
          'background-color: blue; color: white; width: 175px; height: 25px; margin-left: 5px; padding-left: 5px'
        )
        windSpeed.innerText = `Wind Speed: ${data.wind.speed} mph`;
        document.body.appendChild(windSpeed);

        let mainHumidity = document.createElement('p');
        mainHumidity.setAttribute(
          'style', 
          'background-color: blue; color: white; width: 175px; height: 25px; margin-left: 5px; padding-left: 5px'
        )
        mainHumidity.innerText = `Humidity: ${data.main.humidity}%`;
        document.body.appendChild(mainHumidity);
        
      });
  }

function getCityWeatherData (latitude, longitude) {
    // console.log(latitude, longitude);

//changed the temp from the default of Kelvin to Fahrenheit added "&units=imperial" to the end - my result now reads in Fahrenheit
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=f65b142e1803ffb4f8713795f5973a88&units=imperial`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);
    renderWeatherData(data);
   
  });
}



// When I click the search bar it gets me the city
function renderWeatherData (cityClicked) {
  let cityName = cityClicked.city.name; 
  // console.log(cityName);
  let searchedCity = document.querySelector('#searchedCity');
  searchedCity.textContent = cityName; 
}

// let cityTemp = data.main.temp;
// + cityTemp;


// main.temp
// ///gives temp