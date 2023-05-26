let timeEl = document.getElementById('time');
let dateEl =document.getElementById('date');
let userInputCity = document.getElementById('city-name');
let currentWeatherItemEl = document.getElementById('current-weather-items');
let userSearchEl = document.getElementById('user-search-input');
let cityTemp = document.getElementById('temp');
let cityWind = document.getElementById('wind-speed');
let cityHumidity = document.getElementById('humidity');
let weatherForecastEl = document.getElementById('weather-forecast');
let currentTempEl = document.getElementById('current-temp');
let searchButtonEl = document.getElementById('search-click');
let APIKey = 'c84e398e53ea574153ad1bdd9558e008';
let userSearchElValue = document.getElementById('user-search-input').value;
let searchHistoryListEl = document.getElementById('search-list');

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(() => {
    let time = new Date();
    let months = time.getMonth();
    let date = time.getDate();
    let day = time.getDay();
    let hour= time.getHours();
    let hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    let minutes = time.getMinutes();
    let ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML =  days[day] + ', ' + date+ ' ' + months[months]
}, 1000);

    searchButtonEl.addEventListener('click', function() {

    let userSearchElValue = document.getElementById('user-search-input').value;

   // userInputCity.textContent = userSearchElValue + '   ' + moment().format("dddd, MMMM Do") 
    
    fetch(`api.openweathermap.org/data/2.5/forecast?q=${userSearchElValue}units=imperial&appid=${APIKey}`)
    .then(res => res.json()).then(data =>{
        
         })
        })


function showWeatherData (data){
    let {humidity, pressure, wind_speed} = data.current; 

    currentWeatherItemEl.innerHTML =   
   `    <div class="weather-items">
   <div>Humidity</div>
   <div>${humidity}%</div>
  </div>
  <div class="weather-items">
   <div>Pressure</div>
   <div>${pressure}</div>
  </div>
  <div class="weather-items">
   <div>Wind Speed</div>
   <div>${wind_speed}</div>
  </div>`;

  let otherDayForecast = ''
data.daily.forEach((day, idx) => {
    if(idx == 0){
        currentTempEl.innerHTML`  <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@5x.png" alt="weather icon" class="w-icon">
        <div class="other">
        <div class="day">Monday</div>
        <div class="temp">Day -${day.temp.night}&#&#176; F</div>
        <div class="temp">Night -${day.temp.day}&#176; F</div>
    </div>`
    }else{
        otherDayForecast += `<div class="weather-forecast-item">
        <div class="day">Friday</div>${window.moment(day.dt*1000).format('ddd')}
        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
        <div class="temp">Day - ${day.temp.night}&#176; F</div>
        <div class="temp">Night - ${day.temp.day}&#176; F</div>   
    </div>`
    }
})

weatherForecastEl.innerHTML = otherDayForecast;
};
searchButtonEl.addEventListener('click', function(event) {
    event.preventDefault()

    let storedHistoryArr = []

    let storedHistory = document.createElement('button');
    $(storedHistory).css("width", "80px");
    $(storedHistory).css("margin-top", "10px");

   let test = document.getElementById('user-search-input').value;
   localStorage.setItem('test', test);

    storedHistoryArr.pop(test);
    console.log(storedHistoryArr);

   let tester = localStorage.getItem('test');
   storedHistory.textContent = tester;

   searchHistoryListEl.append(storedHistory);
})