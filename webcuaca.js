const cuaca = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3279092cfaf628186dfce268d7947774&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // document.querySelector(".city").innerText = `Weather in ${name}`;
    // document.querySelector(
    //   ".icon"
    // ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    // document.querySelector(".description").innerText = description;
    // document.querySelector(".temp").innerText = `${temp}°C`;
    // document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    // document.querySelector(".wind").innerText = `Wind speed: ${speed} m/s`;

    // document.querySelector(".weather").classList.remove("loading");

    return data;
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
};

(async () => {
  const data = await cuaca("Jakarta");
  console.log(data);
})();
