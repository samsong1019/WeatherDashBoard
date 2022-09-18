//const for api key to make code alittle cleaner and easier to see
const APIKEY = "519ec4da1131e2d9d1d93ae1745eec7e";
//const for any html attribute js needs to refer to
const searchBtn = document.getElementById("searchButton");
const cityEl = document.getElementById("enterCity");
const clearBtn = document.getElementById("clearHistory");
const weatherIcon = document.getElementById("icon");
const tempEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windSpeed");
const historyEl = document.getElementById("history");
const maxTemp = document.getElementById("max");
const minTemp = document.getElementById("min");
const descriptionEl = document.getElementById("description");
const cityNameEl = document.getElementById("cityName");
const mainContainer = document.getElementById("todaysWeather");
const pastCity = document.getElementById("pastCity");
let cityArray = JSON.parse(localStorage.getItem("city")) || [];
// Date() function to get the current date
var date = new Date();
var currentDate =
  date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
let weather = {
  //   fetchweather function with city as parameter
  fetchWeather: function (city) {
    fetch(
      //api link with city and api key
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        APIKEY
    )
      //get response and get data with this.showweather
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.showWeather(data);
      });
  },
  //function to grab specefic items from api name would be city and icon and description is from the weather array so I used 0 to get it from the first object. the temps and humidity is from the main section and the speed is from win section
  showWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, temp_max, temp_min } = data.main;
    const { speed } = data.wind;
    //setting innerHTML for all items so that it will populate the page so user can see
    cityNameEl.innerHTML = name + " " + currentDate;
    weatherIcon.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    descriptionEl.innerHTML = description;
    humidityEl.innerHTML = "Humidity: " + humidity + "%";
    windSpeedEl.innerHTML = "Wind Speed: " + speed + "MPH";
    tempEl.innerHTML = "Temp: " + temp + "°F";
    minTemp.innerHTML = "Min Temp: " + temp_min + "°F";
    maxTemp.innerHTML = "Max Temp: " + temp_max + "°F";
    //removing class d-none so the information is shown
    mainContainer.classList.remove("d-none");
  },
  //search function to use user input in searchbar and will call fetchweather function
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },

};
//add event listner on search button to call function search function inside of weather
document.querySelector("#searchButton").addEventListener("click", function () {
  weather.search();
});

// function to save user input into local storage
searchBtn.addEventListener("click", listMaker);
function listMaker() {
  //get data from input box
  var newCity = document.getElementById("enterCity").value;
  //if there is nothing saved at the start then save an empy array
  if (localStorage.getItem("city") == null) {
    localStorage.setItem("city", "[]");
  }
  var oldCity = JSON.parse(localStorage.getItem("city"));
  oldCity.push(newCity);
  //save the old and new data to local storage
  localStorage.setItem("city", JSON.stringify(oldCity));
}
//event listner function to display items
searchBtn.addEventListener("click", function () {
  const searchValue = cityEl.value;
  cityArray.push(searchValue);
  localStorage.setItem("city", JSON.stringify(cityArray));
  viewList();
});
//function to add to the list and for loop to loop through all integers so that they can create an individual element for each integer in the array
function viewList() {
  historyEl.innerHTML = "";
  if (localStorage.getItem("city") != null) {
    for (let i = 0; i < cityArray.length; i++) {
      const item = document.createElement("input");
      item.setAttribute("type", "text");
      item.setAttribute("readonly", true);
      item.setAttribute("class", "form-control d-block bg-white");
      item.setAttribute("value", cityArray[i]);
      item.setAttribute("id", "itemId")
      historyEl.append(item);
      console.log(item.value);
    }
  }

}


// calling function to keep it persistent
viewList();

