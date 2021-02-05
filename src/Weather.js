import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";


export default function Weather (props)
{

    function showTemperature(response) {
alert (`The weather in ${response.data.name} is ${response.data.main.temp} °C`)
    }
 
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=cea4eaec36371a8d64cf80cfa988df3d&units=metric`;
        axios.get(url).then(showTemperature);
      
    return (
        
        <Loader type="TailSpin" color="pink" height={80} width={80} />
    )

}
