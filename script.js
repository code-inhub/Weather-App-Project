const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c2c398a6b3msh6f2c9d8f30113cdp1e7ae3jsnedde151aaddc",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const get_weather = (citys) => {
  document.getElementById("cityname").innerHTML = citys;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + citys,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp1.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity1.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;

      //   wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit1.addEventListener("click", (e) => {
  //   e.preventDefault();
  get_weather(city.value);
});
get_weather("Chandigarh");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= New Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Delhi_cloud_pct.innerHTML = response.cloud_pct;
    Delhi_temp.innerHTML = response.temp;
    Delhi_feels_like.innerHTML = response.feels_like;
    Delhi_humidity.innerHTML = response.humidity;
    Delhi_humidity.innerHTML = response.humidity;
    Delhi_min_temp.innerHTML = response.min_temp;
    Delhi_max_temp.innerHTML = response.max_temp;
    Delhi_wind_speed.innerHTML = response.wind_speed;
    Delhi_wind_degrees.innerHTML = response.wind_degrees;
    Delhi_sunrise.innerHTML = response.sunrise;
    Delhi_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Bangalore",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Bangalore_cloud_pct.innerHTML = response.cloud_pct;
    Bangalore_temp.innerHTML = response.temp;
    Bangalore_feels_like.innerHTML = response.feels_like;
    Bangalore_humidity.innerHTML = response.humidity;
    Bangalore_humidity.innerHTML = response.humidity;
    Bangalore_min_temp.innerHTML = response.min_temp;
    Bangalore_max_temp.innerHTML = response.max_temp;
    Bangalore_wind_speed.innerHTML = response.wind_speed;
    Bangalore_wind_degrees.innerHTML = response.wind_degrees;
    Bangalore_sunrise.innerHTML = response.sunrise;
    Bangalore_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Hamirpur",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Hamirpur_cloud_pct.innerHTML = response.cloud_pct;
    Hamirpur_temp.innerHTML = response.temp;
    Hamirpur_feels_like.innerHTML = response.feels_like;
    Hamirpur_humidity.innerHTML = response.humidity;
    Hamirpur_humidity.innerHTML = response.humidity;
    Hamirpur_min_temp.innerHTML = response.min_temp;
    Hamirpur_max_temp.innerHTML = response.max_temp;
    Hamirpur_wind_speed.innerHTML = response.wind_speed;
    Hamirpur_wind_degrees.innerHTML = response.wind_degrees;
    Hamirpur_sunrise.innerHTML = response.sunrise;
    Hamirpur_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Hoshiarpur",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Hoshiarpur_cloud_pct.innerHTML = response.cloud_pct;
    Hoshiarpur_temp.innerHTML = response.temp;
    Hoshiarpur_feels_like.innerHTML = response.feels_like;
    Hoshiarpur_humidity.innerHTML = response.humidity;
    Hoshiarpur_humidity.innerHTML = response.humidity;
    Hoshiarpur_min_temp.innerHTML = response.min_temp;
    Hoshiarpur_max_temp.innerHTML = response.max_temp;
    Hoshiarpur_wind_speed.innerHTML = response.wind_speed;
    Hoshiarpur_wind_degrees.innerHTML = response.wind_degrees;
    Hoshiarpur_sunrise.innerHTML = response.sunrise;
    Hoshiarpur_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

bangalore.addEventListener("click", (e) => {
  e.preventDefault();
  get_weather("Bangalore");
});

delhi.addEventListener("click", (e) => {
  e.preventDefault();
  get_weather("New Delhi");
});

gurgaon.addEventListener("click", (e) => {
  //   e.preventDefault();
  get_weather("Gurgaon");
});
