const form_value = document.querySelector('form');
const details = document.querySelector('.details');
// const images = document.querySelector('.images');

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

async function updatecity(city) {
    const updatedcity = await getcity(city);
    const updatedcityweather = await getweather(updatedcity.Key);

    return {
        citydetails: updatedcity,
        cityweather: updatedcityweather
    }
}

form_value.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = form_value.weather.value.trim();
    form_value.reset();
    updatecity(city)
    .then(data => updateUI(data))
    .catch((err) => console.log(err));
});

