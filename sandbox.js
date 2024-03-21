const form_value = document.querySelector('form');
const details = document.querySelector('.details');
// const images = document.querySelector('.images');
const Forecast = new forecast();

function updateUI(data) {
    const city = data.citydetails;
    const weather = data.cityweather;

    // const {city, weather} = data;

    details.innerHTML = `
    <h3>${city.EnglishName}</h3>
    <h6>${weather.WeatherText}</h6>
    <div>
        <span>
            ${weather.Temperature.Metric.Value}
        </span>
        <span>&deg;C</span>
    </div>
`

//    let timeurl = weather.IsDayTime ? '/img/day.jpg' : '/img/night.jpg' ;
//    images.setAttribute('src', timeurl);
}

form_value.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = form_value.weather.value.trim();
    form_value.reset();
    Forecast.updatecity(city)
    .then(data => updateUI(data))
    .catch((err) => console.log(err));


    localStorage.setItem('city',city);
});


if(localStorage.getItem('city'))
{
    Forecast.updatecity(localStorage.getItem('city'))
    .then((data)=> updateUI(data))
    .catch((err)=> console.log(err));
}
