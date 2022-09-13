function city(cityName) {
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=519ec4da1131e2d9d1d93ae1745eec7e`)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})

}
// add event listeer 
// function lat
fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=imperial&appid=519ec4da1131e2d9d1d93ae1745eec7e")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=39.2908816&lon=-76.610759&units=imperial&exclude=minutely,hourly&appid=519ec4da1131e2d9d1d93ae1745eec7e")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})