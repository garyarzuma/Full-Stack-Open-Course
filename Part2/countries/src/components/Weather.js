import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Weather = ({country}) => {

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=imperial&appid=${API_KEY}`
const [temp,setTemp] = useState();
const [icon,setIcon] = useState();

useEffect(() => {
    axios
      .get(API_URL)
      .then(response => {
        
        setTemp(response.data.main.temp)
        setIcon(response.data.weather[0].icon)     
      })
  }, [])

    return (
    <div>
        <h2>Weather in {country.capital}</h2>
        <div>Temperature: {temp} Fahrenheit</div>
        <img 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weatherIcon"
        />
        <br/>
    </div>
    )
}
export default Weather

//