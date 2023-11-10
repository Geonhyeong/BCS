import { useEffect, useState } from "react";
import axios from "axios";
import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiDayRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

const weatherIcon = {
  "01": {
    textColor: "text-red-500",
    icon: <WiDaySunny size={120} />,
  },
  "02": {
    textColor: "text-orange-500",
    icon: <WiDaySunnyOvercast size={120} />,
  },
  "03": {
    textColor: "text-gray-500",
    icon: <WiCloud size={120} />,
  },
  "04": {
    textColor: "text-gray-500",
    icon: <WiCloudy size={120} />,
  },
  "09": {
    textColor: "text-cyan-500",
    icon: <WiShowers size={120} />,
  },
  10: {
    textColor: "text-purple-500",
    icon: <WiDayRain size={120} />,
  },
  11: {
    textColor: "text-yellow-500",
    icon: <WiThunderstorm size={120} />,
  },
  13: {
    textColor: "text-blue-500",
    icon: <WiSnow size={120} />,
  },
  50: {
    textColor: "text-gray-500",
    icon: <WiFog size={120} />,
  },
};

const App = () => {
  const API_KEY = "b57ac70f25ab59226ce7c2894fde637b";

  const [weatherData, setWeatherData] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  const getWeather = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    setWeatherData(response.data);
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  useEffect(() => {
    if (!latitude || !longitude) return;

    getWeather();
  }, [latitude, longitude]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-2xl">
      {weatherData ? (
        <div
          className={`flex flex-col items-center gap-8 ${
            weatherIcon[weatherData.weather[0].icon.substring(0, 2)].textColor
          }`}
        >
          {weatherIcon[weatherData.weather[0].icon.substring(0, 2)].icon}
          <div>
            {weatherData.name}, {weatherData.main.temp}
          </div>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default App;
