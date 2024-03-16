const key = 'BA2Cjs1KemIJGO1xsMToyuw0MogNkGRy';
const city = 'London';
const id = 328328;


async function getweather()
{
    const refereceWeatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const weatherapikey = `${id}?apikey=${key}`;

    const weatherdata = await fetch(refereceWeatherUrl+weatherapikey);
    const weatherresponse = weatherdata.json();

    return weatherresponse;
}


async function getcity()
{
    const referenceurl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const apiKey = `?apikey=${key}&q=${city}`;

    const data = await fetch(referenceurl+apiKey);
    const response = await data.json();
    // console.log(response);
    return response[0];
}

getcity().then(data => console.log(data)).catch(err => console.log(err));

getweather().then(data=> console.log(data)).catch(err=> console.log(err));