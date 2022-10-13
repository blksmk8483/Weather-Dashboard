
// Open Weather API Key 'f65b142e1803ffb4f8713795f5973a88'

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
    let geocodeAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f65b142e1803ffb4f8713795f5973a88`


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










// // // My copy&paste review to pull from

// fetch('https://api.github.com/orgs/twitter/public_members')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Public Members: Raw data \n----------');
//     console.log(data);
//   });

// fetch('https://api.github.com/orgs/twitter/repos')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Repositories: Names only \n----------');
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].full_name)
//     }
//   });



//   // !!!!!!!make sure you are looking at the url link to 
//   // get the correct names for the data 
//   // ex. console.log(data[i].full_name) - full_name is 
//   // the correct data.



//   // Student version

//   // TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
// var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Github Repo Issues \n----------');
//     console.log(data);
//     return data;
//   })
//   .then(function (data) {
//     // TODO: Loop through the response
//     // TODO: Console log each issue's URL and each user's login
//     for (var i=0; i < 5; i++) {
//       console.log(data[i].comments)
//       console.log(data[i].user.login)
//     }

//   });

//   // More examples

//   var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   // replace `octocat` with anyone else's GitHub username
//   var requestUrl = 'https://api.github.com/users/octocat/repos';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);