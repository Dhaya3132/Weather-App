const key = 'BA2Cjs1KemIJGO1xsMToyuw0MogNkGRy';


async function getweather(citykey)
{
    const refereceWeatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const weatherapikey = `${citykey}?apikey=${key}`;

    const weatherdata = await fetch(refereceWeatherUrl+weatherapikey);
    const weatherresponse = await weatherdata.json();

    return weatherresponse[0];
}


async function getcity(city)
{
    const referenceurl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const apiKey = `?apikey=${key}&q=${city}`;

    const data = await fetch(referenceurl+apiKey);
    const response = await data.json();
    // console.log(response);
    return response[0];
}

// getcity().then(data => console.log(data)).catch(err => console.log(err));

// getweather().then(data=> console.log(data)).catch(err=> console.log(err));