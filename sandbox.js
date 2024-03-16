const form_value = document.querySelector('form');

async function updatecity(city)
{

}

form_value.addEventListener('submit',(e)=>{
   e.preventDefault();

   const city = form_value.weather.value.trim();
   form_value.reset();
   updatecity(city);
});
