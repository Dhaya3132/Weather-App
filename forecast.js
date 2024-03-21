class forecast {
    constructor() {
        this.key = 'BA2Cjs1KemIJGO1xsMToyuw0MogNkGRy';
        this.refereceWeatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.referenceurl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updatecity(city) {
        const updatedcity = await this.getcity(city);
        const updatedcityweather = await this.getweather(updatedcity.Key);
    
        return {
            citydetails: updatedcity,
            cityweather: updatedcityweather
        }
    }

    async getweather(citykey) {

        const weatherapikey = `${citykey}?apikey=${this.key}`;

        const weatherdata = await fetch(this.refereceWeatherUrl + weatherapikey);
        const weatherresponse = await weatherdata.json();

        return weatherresponse[0];
    }

    async getcity(city) {
        const apiKey = `?apikey=${this.key}&q=${city}`;

        const data = await fetch(this.referenceurl + apiKey);
        const response = await data.json();
        // console.log(response);
        return response[0];
    }
}




// getcity().then(data => console.log(data)).catch(err => console.log(err));

// getweather().then(data=> console.log(data)).catch(err=> console.log(err));