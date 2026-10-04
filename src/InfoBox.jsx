import Card from '@mui/material/Card';
import mumbai from "./assets/mumbai.jpg";
import rainy from "./assets/rainy.avif";
import hot from "./assets/hot.avif";
import cold from "./assets/cold.avif";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './InfoBox.css';
import Typography from '@mui/material/Typography';

export default function InfoBox({ result }) {

    if (!result || !result.main) {
        return null;
    }

    let info = {
        City: result.name,
        Temperature: result.main.temp,
        Max_Temperature: result.main.temp_max,
        Min_Temperature: result.main.temp_min,
        Humidity: result.main.humidity,
        Pressure: result.main.pressure,
        Feel_Like: result.main.feels_like,
        Weather:result.weather[0].description
    };
    let WeatherIcon =
    info.Humidity > 70
        ? CloudySnowingIcon
        : info.Temperature > 15
            ? SunnyIcon
            : AcUnitIcon;


    return (
        <div>
            <h2>Weather Information</h2>

           
            <div className="container">
                 <Card  className="weather-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="rainy"
        height="140"
        image={
    info.Humidity > 70
        ? rainy
        : info.Temperature > 15
            ? hot
            : cold
}      />
      <CardContent  className="weather-content">
       <div className="city">
         <Typography gutterBottom variant="h5" component="div">
          
          {info.City}
          
        </Typography>
        < WeatherIcon />
       </div>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <div className="weather-details">

    <div className="weather-item">
        <span>Temperature</span>
        <strong>{info.Temperature}°C</strong>
    </div>

    <div className="weather-item">
        <span>Feels Like</span>
        <strong>{info.Feel_Like}°C</strong>
    </div>

    <div className="weather-item">
        <span>Maximum Temperature</span>
        <strong>{info.Max_Temperature}°C</strong>
    </div>

    <div className="weather-item">
        <span>Minimum Temperature</span>
        <strong>{info.Min_Temperature}°C</strong>
    </div>

    <div className="weather-item">
        <span>Humidity</span>
        <strong>{info.Humidity}%</strong>
    </div>

    <div className="weather-item">
        <span>Pressure</span>
        <strong>{info.Pressure} hPa</strong>
    </div>

</div>

<p className="description">
    The weather can be described as{" "}
    <b>{info.Weather}</b>{" "}
    and feels like {info.Feel_Like}°C.
</p>
         
        </Typography>
      </CardContent>
     
    </Card>
            </div>
        </div>
    );
}