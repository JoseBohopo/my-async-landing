const content = null || document.getElementById("content");
const API_YOUTUBE =
  "https://youtube-v3-alternative.p.rapidapi.com/channel?id=UC3aj05GEEyzdOqYM5FLSFeg";
const API_GEOLOCATION =
  "https://ip-geo-location.p.rapidapi.com/ip/check?format=json";

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
