let timeEl = document.getElementById('time');
let dateEl =document.getElementById('date');
let currentWeatherItemEl = document.getElementById('current-weather-item')
let timezone = document.getElementById('time-zone');
let countryEl = document.getElementById('country');
let weatherForecastEl = document.getElementById('weather-forecast');
let currentTempEl = document.getElementById('current-temp');
let APIKey = c84e398e53ea574153ad1bdd9558e008;

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
setInterval(() => {
    let time = new Date();
    let month = time.getMonth();
    let date = time.getDate();
    let day = time.getHours();
    let hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    let minutes = time.getMinutes();
    let ampm = hours >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id= "am-pm">${ampm}</span>`

    dateEl.innerHTML =  days[day] + ',' + date + ' ' + months[months]
}, 1000);

