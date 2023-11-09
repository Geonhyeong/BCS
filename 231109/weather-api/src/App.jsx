import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const API_KEY = "b57ac70f25ab59226ce7c2894fde637b";
  const addr = `https://api.openweathermap.org/data/2.5/weather?lat=35.8620744&lon=128.6215081&appid=${API_KEY}`;

  const [weatherData, setWeatherData] = useState();

  const getWeather = async () => {
    const response = await axios.get(addr);

    setWeatherData(response.data);
  };

  useEffect(() => {
    // 날씨 가져오기
    getWeather();
  }, []);

  return (
    <div className="bg-red-100 text-center">
      {weatherData ? (
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        />
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default App;
