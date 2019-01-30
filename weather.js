class Weather {
    constructor(city, state){
        this.apiKey = '57a1c912214a8a43de668d18af5610ab';
        this.city = city;
        this.country = state;
    }

    //Fetch weather from API

    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //change weather location
    changeLocation(city, state){
        this.city = city;
        this.country = country;
    }
}