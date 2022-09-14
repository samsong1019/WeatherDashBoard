const searchBtn = document.getElementById("searchButton");
const APIKEY = "519ec4da1131e2d9d1d93ae1745eec7e";
const cityEl = document.getElementById("enterCity");
const clearBtn = document.getElementById("clearHistory");
const weatherPicEl = document.getElementById("weatherPic");
const tempEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windSpeed");
const historyEl = document.getElementById("history");
function city(cityName) {
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=519ec4da1131e2d9d1d93ae1745eec7e`)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})

}
searchBtn.addEventListener("click", city);
// function lat
fetch("https://api.openweathermap.org/data/2.5/weather?lat=34.1206564&lon=-84.0043513&units=imperial&appid=519ec4da1131e2d9d1d93ae1745eec7e")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})
