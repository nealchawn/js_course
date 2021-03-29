const ui = new UI();
const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

//weather.changeLocation('monticello','NY');

document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
  weather.getWeather()
  .then(weatherData => ui.paint(weatherData))
  .catch( error => console.log(error));
}

const modalSaveBtn = document.getElementById('w-change-btn');

modalSaveBtn.addEventListener('click',(e)=>{
  let city = document.getElementById('city').value;
  let state = document.getElementById('state').value;

  storage.setLocationData(city, state);
  weather.changeLocation(city, state);
  getWeather();
  $('#locationModal').modal('hide');
})