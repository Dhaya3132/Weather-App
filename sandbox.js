const form_value = document.querySelector('form');

async function updatecity(city)
{
  const updatedcity = await getcity(city);
  const updatedcityweather = await getweather(updatedcity.Key);

  return{
    citydetails : updatedcity,
    cityweather : updatedcityweather
  }
}

form_value.addEventListener('submit',(e)=>{
   e.preventDefault();

   const city = form_value.weather.value.trim();
   form_value.reset();
   updatecity(city).then( (data)=> console.log(data)).catch( (err)=> console.log(err));
});
