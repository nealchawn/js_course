class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidty = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country} - Lat: ${weather.coord.lat},Long: ${weather.coord.lon}`;
    this.desc.textContent = weather.weather[0].main+" - "+weather.weather[0].description;
    this.string.textContent = weather.main.temp+" (Kelvin)";
    this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidty.textContent = "Relative Humidity: "+weather.main.humidity;
    this.feelslike.textContent = "Feels Like: "+weather.main.feels_like+" (Kelvin)";
    this.dewpoint.textContent = "Pressure: "+weather.main.pressure;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} Gust: ${weather.wind.gust} Degrees: ${weather.wind.deg}`;
    
  }
}