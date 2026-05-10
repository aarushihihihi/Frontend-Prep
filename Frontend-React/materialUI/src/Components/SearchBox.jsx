
import SearchIcon from '@mui/icons-material/Search';
import { Button, Input, TextField} from '@mui/material';
import WeatherComponent from './WeatherComponent'
import {useEffect, useState} from "react"


// import.meta.env.API_KEY;

import  '../weather.css'
import axios from 'axios';


const API_KEY="c7b4a190188d4adc2b4959b9f840980c"


export default function SearchBox({updateInfo}){
    
    let[city,setCity]=useState("");
    let url=`https://api.openweathermap.org/data/2.5/weather`

let handleInputChange=(e)=>
{

    setCity(e.target.value)

}



let getWeatherInfo=async(city)=>{
try{
    let response=await axios.get(`${url}?q=${city}&appid=${API_KEY}&units=metric`);
    let data=response;
    console.log('data found',data);

    let result={
        city:city,
        temp:response.data.main.temp,
        tempMax:response.data.main.temp_max,
     tempMin:response.data.main.temp_min,
     description:response.data.weather[0].description,
     icon:response.data.weather[0].icon

    }
    console.log('result',result);
    return result;

}
catch(error){
    console.log('error found',error);

}
    

}


// useEffect(()=>{
//     getWeatherInfo(city)
// },[city])



let handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(city);
    
    setCity("")
   let newInfo= await getWeatherInfo(city);
   updateInfo(newInfo)
}


    return(


        <div className='SearchBox'>

        <form onSubmit={handleSubmit}>

<TextField id="city" label="City" variant="outlined"  value={city}
onChange={handleInputChange}
name='city'
/>
<br/>
<br/>
<Button 
id='search-btn'
type="submit"
variant="contained"
onClick={<WeatherComponent/>} >
    Search
    </Button>
        </form>
                </div>

    )




} 