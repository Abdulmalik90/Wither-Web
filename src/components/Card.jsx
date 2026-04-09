// react & css imports
import { useEffect, useState } from "react";
import "../styles/card.css"
// MUI imports
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
// other imports
import axios from "axios";
import { apiKey } from "../contexts/apiContext";


let cancelAxios = null
export default function Card(){
    const [temp, setTemp] = useState({
        current: null,
        max: null,
        min: null
    })
    const [weather, setWeather] = useState({description: "", icon: ""});

    
    // getting the wither by api
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=26.425699&lon=50.055164&appid=${apiKey}`, {
            cancelToken: new axios.CancelToken((c)=>{
                cancelAxios = c;
            })
        })
        .then(function (response) {
            // setting the temperature state
            setTemp({current: Math.round(response.data.main.temp - 272.15),
                max: Math.round(response.data.main.temp_max - 272.15),
                min: Math.round(response.data.main.temp_min - 272.15)
            })

            // setting the weather condition state
            setWeather({
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon
            })

            
            
            
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

        return ()=> {
            cancelAxios();
        }
    },[]);
    return (
        <Container maxWidth="sm">
            {/* Content Container */}
            <div style={{height: "100vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

                {/* Card */}
                <div dir="rtl" style={{background: "rgb(28 52 91 / 36%)", width: "100%", padding: "10px", borderRadius: "15px", boxShadow: "0px 11px 1px rgba(0, 0, 0, 0.05)"}}>

                    {/* Content */}
                    <div>
                        {/* City & Time */}
                        <div style={{display: "flex", alignItems: "end", justifyContent: "start"}} dir="rtl">
                            <Typography variant="h1" style={{marginRight: "20px", fontWeight: "400"}}>
                                الدمام
                            </Typography>

                            <Typography variant="h5" style={{marginRight: "20px"}} >
                                9 إبريل 2026
                            </Typography>
                        </div>

                        <hr />
                        {/* Degree & Description & Icon container */}
                        <div style={{display: "flex", justifyContent: "space-around"}}>

                            {/* Degree & Description */}
                            <div>
                                {/* Temperature */}
                                <div style={{display: "flex"}}>
                                    <Typography variant="h1" style={{textAlign: "right"}} >
                                        {temp.current}
                                    </Typography>
                                    {/* TODO: Sky Image */}
                                    <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
                                </div>
                                {/* // Temperature // */}

                                <Typography variant="h6" style={{textAlign: "center"}} >
                                        {weather.description}
                                </Typography>

                                {/* Min & Max */}
                                <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <h5 >الصغرى: {temp.min}</h5>
                                    <h5 >|</h5>
                                    <h5>الكبرى: {temp.max}</h5>
                                </div>
                            </div>

                            {/* // Degree & Description // */}
                            <CloudIcon style={{fontSize: "200px", color: "white"}}/>

                        </div>
                        {/* // Degree & Description & Icon container // */}
                    </div>


                </div>
                {/* Transilation Button Container */}
                <div dir="rtl" style={{display: "flex", justifyContent: "end", width: "100%", marginTop: "20px"}}>
                    <Button variant="text" style={{color: "white"}}>English</Button>

                </div>
            </div>
        </Container>
    )
}