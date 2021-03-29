class Weather{
  constructor(city="Ashburn", state="Virginia"){
    this.apikey = "7e73eb6de243372ba438d2df1d6b5e4b";
    this.city = city;
    this.state = state;
  }

  // fetch weather from api
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},us&appid=${this.apikey}`);

    const responseJSON = await response.json();
    return responseJSON;
  }

  // change location
  changeLocation(city="",state=""){
    this.city = city;
    this.state = state;
  }
}