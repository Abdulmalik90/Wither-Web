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

import moment from "moment";
import "moment/locale/ar"; // ✅ Add this
import { useTranslation } from 'react-i18next';

let cancelAxios = null

moment.locale("ar");
export default function Card(){
    const [temp, setTemp] = useState({
        current: null,
        max: null,
        min: null
    })
    const [weather, setWeather] = useState({description: "", icon: ""});

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const arabicDate = new Date().toLocaleDateString('ar-SA', options);
    const englishDate = new Date().toLocaleDateString('en', options);
    const [date, setDate] = useState(arabicDate);
    const { t, i18n } = useTranslation();
    const [direction, setDirection] = useState("rtl");

    // ============== Events Handlers ================ //
    function handleLanguageClick(){
        
        if (i18n.language === "en"){
            i18n.changeLanguage("ar");
            setDate(arabicDate)
            setDirection("rtl")
        } else {
            i18n.changeLanguage("en");
            setDate(englishDate)
            setDirection("ltr")
        }

        
        
    }

    
    

    // getting the wither by api
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=26.425699&lon=50.055164&appid=${import.meta.env.VITE_WEATHER_API_KEY}&lang=${i18n.language}`, {
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
    },[i18n.language]);

    // firs load of the page is arabic
    useEffect(()=>{i18n.changeLanguage("ar");}, []);

        

    return (
        <Container maxWidth="sm">
            {/* Content Container */}
            <div style={{height: "100vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

                {/* Card */}
                <div dir={direction} style={{background: "rgb(28 52 91 / 36%)", width: "100%", padding: "10px", borderRadius: "15px", boxShadow: "0px 11px 1px rgba(0, 0, 0, 0.05)"}}>

                    {/* Content */}
                    <div>
                        {/* City & Time */}
                        <div style={{display: "flex", alignItems: "end", justifyContent: "start"}} dir="rtl">
                            <Typography variant="h1" style={{marginRight: "20px", fontWeight: "400"}}>
                                {t("dammam")}
                            </Typography>

                            <Typography variant="h5" style={{marginRight: "20px"}} >
                                {date}
                            </Typography>
                        </div>

                        <hr />
                        {/* Degree & Description & Icon container */}
                        <div style={{display: "flex", justifyContent: "space-around"}}>

                            {/* Degree & Description */}
                            <div>
                                {/* Temperature */}
                                <div style={{display: "flex"}}>
                                    <Typography variant="h1" >
                                        {temp.current}
                                    </Typography>
                                    {/*  Sky Image */}
                                    <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
                                </div>
                                {/* // Temperature // */}

                                <Typography variant="h6" style={{textAlign: "center"}} >
                                        {weather.description}
                                </Typography>

                                {/* Min & Max */}
                                <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <h5 >{t("min")}: {temp.min}</h5>
                                    <h5 >|</h5>
                                    <h5>{t("max")}: {temp.max}</h5>
                                </div>
                            </div>

                            {/* // Degree & Description // */}
                            <CloudIcon style={{fontSize: "200px", color: "white"}}/>
                            

                        </div>
                        {/* // Degree & Description & Icon container // */}
                    </div>


                </div>
                {/* Transilation Button Container */}
                <div dir={direction} style={{display: "flex", justifyContent: "end", width: "100%", marginTop: "20px"}}>
                    <Button variant="text" style={{color: "white"}} onClick={handleLanguageClick}>{t("language")}</Button>

                </div>
            </div>
        </Container>
    )
}