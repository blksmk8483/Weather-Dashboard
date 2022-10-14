// Open Weather API Key 'f65b142e1803ffb4f8713795f5973a88'
const myAPIKey = 'f65b142e1803ffb4f8713795f5973a88';

// Open Weather API Call
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={f65b142e1803ffb4f8713795f5973a88}

// fetch(api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={f65b142e1803ffb4f8713795f5973a88})
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//       });

// Geocoder API key 'f65b142e1803ffb4f8713795f5973a88'

// Geocoder API Call
//api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}

// fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=f65b142e1803ffb4f8713795f5973a88')
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//   });

let myButton = document.getElementById('js-submit-city');

myButton.addEventListener('click', getCityLatLon); 

  function getCityLatLon() {
    //grab value from input field
    let citySearchInput = document.getElementById('js-search-city');
    let cityName = citySearchInput.value
    console.log(cityName)

    //create API Geocode API string with city name
    // let geocodeAPIURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&appid=f65b142e1803ffb4f8713795f5973a88'
    const geocodeAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPIKey}`;


    //pass API to a fetch call
    fetch(geocodeAPIURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        // console.log(data.coord.lat)
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        getCityWeatherData(lat, lon);
      });
  }

function getCityWeatherData (latitude, longitude) {
    console.log(latitude, longitude);

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=f65b142e1803ffb4f8713795f5973a88`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);

  });

}



// Here is the example that I got from the site using my API key
// - Example of API call:
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f65b142e1803ffb4f8713795f5973a88

// so I need to make a var for q to get my city, state it thats what I want in the above ex.