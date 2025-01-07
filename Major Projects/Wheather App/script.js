
    const input = document.querySelector('.Inputing');
    const search = document.getElementById('Search');
    const img = document.getElementById('Images');
    const temprature = document.querySelector('.temprature')
    const description = document.querySelector('.description')
    const Humidity = document.getElementById('Humidity')
    const Wind = document.getElementById('Wind')
    const errors = document.querySelector('.errors')
    const mainsec = document.querySelector('.Mainsec')
async function Weather(city){
    const api_keys = "f454cbdd9ebd47d0dd32077dfa0f6870";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_keys}`;
    const data = await fetch(`${url}`).then(response => response.json());
    console.log(data);
    if(data.cod === '404'){
        errors.style.display = "flex";
        mainsec.style.display = "none";
        return;
    }
    
        errors.style.display = "none";
        mainsec.style.display = "flex";
    
   

  temprature.innerHTML = `${Math.round((data.main.temp)-273.15)}°C`;
  description.innerHTML = `${data.weather[0].description}`;
  Humidity.innerHTML = `${data.main.humidity}%`;
  Wind.innerHTML = `${data.wind.speed}KmH`;
  switch(data.weather[0].main){
    case 'Clouds' :
         img.src = "/Images/cloud.png";
    break;
    case 'Clear' : 
      img.src = "/Images/clear.png";
    break;
    case 'Rain' : 
      img.src = "/Images/rain.png";
    break;
    case 'Mist' : 
       img.src = "/Images/mist.png";
    break;
    case 'Snow' : 
       img.src = "/Images/snow.png";
    break;
    
  }
    
}

search.addEventListener('click', ()=> {
      Weather(input.value);
    })



    // const Input = document.querySelector('.Inputing');
    // const Search = document.getElementById('Search');
    // const img = document.getElementById('Images');
    // const Temprature = document.querySelector('.temprature');
    // const Description = document.querySelector('.description');
    // const Humidity = document.querySelector('.Humidity');
    // const Wind = document.querySelector('.Wind');
    // const errors = document.querySelector('.errors');
    // const Mainsec = document.querySelector('.Mainsec');

  


    // async function display_weather(city) {
    //    const api_key = "f454cbdd9ebd47d0dd32077dfa0f6870";
    //    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    //    const Data = await fetch(`${url}`).then(response => response.json());
    //    console.log(Data);
    //    Temprature.innerHTML = `${Math.round((Data.main.temp)-273.15)}°C`;
    //    Description.innerHTML = `${Data.weather[0].description}`;
    //    Humidity.innerHTML = `${Data.main.humidity}%`;
    //    Wind.innerHTML = `${Data.wind.speed}Km/H`;

    //    switch(Data.weather[0].main){
    //        case 'Clouds' : 
    //        img.src = "/Images/cloud.png";
    //        break;
    //        case 'Clear' : 
    //        img.src = "/Images/clear.png";
    //        break;
    //        case 'Mist' : 
    //        img.src = "/Images/mist.png";
    //        break;
    //        case 'Rain' : 
    //        img.src = "/Images/rain.png";
    //        break;
    //        case 'Snow' : 
    //        img.src = "/Images/snow.png";
    //        break;
    //    }        
    // }


    //   if(Data.cod === '404'){
    //     errors.style.display = "flex";
    //     Mainsec.style.display = "none";
    //     return;
    // }
    // errors.style.display = "none";
    // Mainsec.style.display = "flex";




    // Search.addEventListener('click', ()=>{
    //     display_weather(Input.value);

    // })
