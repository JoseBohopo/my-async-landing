const content = null || document.getElementById("content");
const weatherToday = null || document.getElementById("weatherToday");
const API_YOUTUBE =
  "https://youtube-v3-alternative.p.rapidapi.com/channel?id=UC3aj05GEEyzdOqYM5FLSFeg";
const API_GEOLOCATION =
  "https://ip-geo-location.p.rapidapi.com/ip/check?format=json";
//Forecast API call

const optionsWeather = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "94b561bb73msh61f99cafdd1bbbdp107af7jsn78d07f14fd8c",
    "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
  },
};

const fetchWeatherData = async (urlAPI, optionsWeather) => {
  const response = await fetch(urlAPI, optionsWeather);
  const data = response.json();
  return data;
};

//Geolocation API call

const optionsGeoLocation = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "94b561bb73msh61f99cafdd1bbbdp107af7jsn78d07f14fd8c",
    "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com",
  },
};

const fetchLocationData = async (urlAPI, optionsGeoLocation) => {
  const response = await fetch(urlAPI, optionsGeoLocation);
  const data = response.json();
  return data;
};

//Youtube API call

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "94b561bb73msh61f99cafdd1bbbdp107af7jsn78d07f14fd8c",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API_YOUTUBE);
    const location = await fetchLocationData(
      API_GEOLOCATION,
      optionsGeoLocation
    );
    let { name } = location.city;
    const weatherAPI = `https://forecast9.p.rapidapi.com/rapidapi/forecast/${name}/summary/`;
    const weather = await fetchWeatherData(weatherAPI, optionsWeather);
    weather.forecast.items[0].temperature;
    let sunriseTimeInHours = new Date(
      weather.forecast.items[0].astronomy.sunrise
    );
    let sunriseHour = sunriseTimeInHours.getHours();
    let sunriseMin = sunriseTimeInHours.getMinutes();
    let sunriseSeg = sunriseTimeInHours.getSeconds();

    let sunsetTimeInHours = new Date(
      weather.forecast.items[0].astronomy.sunset
    );

    let sunsetHour = sunsetTimeInHours.getHours();
    let sunsetMin = sunsetTimeInHours.getMinutes();
    let sunsetSeg = sunsetTimeInHours.getSeconds();

    let dayWeather = `
    <div class="UQt4rd mb-10  sm:mb-8 md:mb-12 lg:mb-16 xl:mb-22">
    <main
      class="mt-10 mx-auto max-w-7xl px-4 sm:px-6   lg:px-8 "
    >
        <img
          class="wob_tci"
          alt="Parcialmente nublado"
          src=${
            weather.forecast.items[0].prec.probability >= 50
              ? "//ssl.gstatic.com/onebox/weather/64/rain_light.png"
              : "//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          }
          id="wob_tci"
          data-atf="1"
          data-frt="0"
        />
        <div
          jscontroller="e0Sh5"
          class="Ab33Nc"
          aria-level="3"
          role="heading"
          jsaction="rcuQ6b:npT2md"
        >
          <div>
            <div class="vk_bk TylWce SGNhVe">
              <span class="wob_t q8U8x" id="wob_tm" style="display: inline"
                > ${weather.forecast.items[0].temperature.max}</span
              ><span class="wob_t" id="wob_ttm" style="display: none"
                >51</span
              >
            </div>
            <div
              jscontroller="e0Sh5"
              class="vk_bk wob-unit"
              jsaction="rcuQ6b:npT2md"
            >
              <span
                class="wob_t"
                style="display: inline"
                aria-label="°Celsius"
                aria-disabled="true"
                role="button"
                >°C</span
              ><a
                class="wob_t"
                href="#"
                style="display: none; text-decoration: none"
                data-lams=""
                data-metric="true"
                data-url="/setprefs?fheit=0&amp;sig=0_O-bJ8yuy4uMzyamCqEkQ55U86b4=&amp;prev=https://www.google.com/search%3Fq%3Dforecast%26rlz%3D1C5CHFA_enES979ES979%26oq%3Dforeca%26aqs%3Dchrome.2.69i57j46i131i199i433i457i465i512j0i433i512j0i402i512j0i402j69i60l3.3609j0j7%26sourceid%3Dchrome%26ie%3DUTF-8"
                role="button"
                jsaction="ytDzMd"
                data-ved="2ahUKEwjDhNu5wYj9AhWwQ_EDHYRfDdwQ-lt6BAgJEAE"
                ><span aria-label="°Celsius">°C</span></a
              ><span class="Az4ne"></span
              ><a
                class="wob_t"
                href="#"
                style="
                  display: inline;
                  text-decoration: none;
                  margin-left: -1px;
                "
                data-lams=""
                data-metric="false"
                data-url="/setprefs?fheit=1&amp;sig=0_O-bJ8yuy4uMzyamCqEkQ55U86b4=&amp;prev=https://www.google.com/search%3Fq%3Dforecast%26rlz%3D1C5CHFA_enES979ES979%26oq%3Dforeca%26aqs%3Dchrome.2.69i57j46i131i199i433i457i465i512j0i433i512j0i402i512j0i402j69i60l3.3609j0j7%26sourceid%3Dchrome%26ie%3DUTF-8"
                role="button"
                jsaction="ytDzMd"
                data-ved="2ahUKEwjDhNu5wYj9AhWwQ_EDHYRfDdwQ-1t6BAgJEAI"
                ><span aria-label="°Fahrenheit">°F</span></a
              >
              <span
                class="wob_t"
                style="display: none; margin-left: -1px"
                aria-label="°Fahrenheit"
                aria-disabled="true"
                role="button"
                >°F</span
              >
            </div>
          </div>
        </div>
        <div class="wtsRwe">
        <div>Sunrise: <span id="wob_hm">${sunriseHour}h ${sunriseMin}mins ${sunriseSeg}sec</span></div>
        <div>Sunset: <span id="wob_hm">${sunsetHour}h ${sunsetMin}mins ${sunsetSeg}sec</span></div>
          <div>Precipitaciones: <span id="wob_pp">${
            weather.forecast.items[0].prec.probability
          }%</span></div>
      
          <div>
            Wind:
            <span
              ><span class="wob_t" id="wob_ws">${
                weather.forecast.items[0].wind.max
              } km/h</span
              ><span class="wob_t" style="display: none" id="wob_tws"
                >4 mph</span
              ></span
            >
          </div>
        </div>
      </div>
    `;

    let view = `
${videos.data
  .map(
    (video) => `
<div class="group relative">
<div
  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
>
  <img src="${video?.richThumbnail.map((thumbnail) => thumbnail.url)}" alt="${
      video?.description
    }" class="w-full" />
</div>
<div class="mt-4 flex justify-between">
  <h3 class="text-sm text-gray-700">
    <span aria-hidden="true" class="absolute inset-0"></span>
    ${video?.title}
  </h3>
</div>
</div>
`
  )
  .slice(0, 4)
  .join("")}

`;
    weatherToday.innerHTML = dayWeather;
    content.innerHTML = view;
  } catch (error) {
    alert(error);
  }
})();

//Toggle Nav
const button = document.getElementById("closeButton");
button.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display === "block";
    dropdown.classList.remove("up");
    dropdown.classList.add("down");
  } else {
    dropdown.style.display === "none";
    dropdown.classList.remove("down");
    dropdown.classList.add("up");
  }
});
