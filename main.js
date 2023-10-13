const form = document.querySelector("form")
const input = document.querySelector("input")
const cityName = document.querySelector("h1")
const temp = document.querySelector("h3")
const huma = document.querySelector("h2")
const img = document.querySelector("img")
const body = document.querySelector("body")


const getWeatherData = async (e) => {
    e.preventDefault();
    try {
        const response =
            await fetch(`https://api.weatherapi.com/v1/current.json?key=26cb888a82984ea6af770745230706&q=${input.value}&aqi=yes`);
        const data = await response.json();

        let locationName = data.location.name;
        let temp_c = data.current.temp_c;

        let icon = data.current.condition.icon;
        let huma = data.current.humidity;
        huma.innerText = `Humidity: ${data.current.humidity}`;

        cityName.innerText = locationName;
        cityName.innerText = `City: ${data.location.name}`;
        temp.innerText = `${temp_c}°C`;
        temp.innerText = `Temp: ${temp_c}°C`;


        let now = new Date();
        let date = document.querySelector('.card-2 .date');
        date.innerText = dateBuilder(now);

        function dateBuilder(d) {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day} ${date} ${month} ${year}`;

        }


        body.style.background = 'url(https://source.unsplash.com/random/900×700/?weather/sunny/raining)';
        body.style.backgroundSize = "cover"
        img.setAttribute("src", icon);

    }
    catch {

        window.alert("Enter Valid City Name")

    }
    form.reset();
};

form.addEventListener("submit", getWeatherData);