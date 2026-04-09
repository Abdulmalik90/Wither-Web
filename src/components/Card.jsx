import "../styles/card.css"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
export default function Card(){

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
                                <div>
                                    <Typography variant="h1" style={{textAlign: "right"}} >
                                        24
                                    </Typography>
                                    {/* TODO: Sky Image */}
                                </div>
                                {/* // Temperature // */}

                                <Typography variant="h6" style={{textAlign: "right"}} >
                                        broken clouds
                                </Typography>

                                {/* Min & Max */}
                                <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <h5 >الصغرى: 20</h5>
                                    <h5 >|</h5>
                                    <h5>الكبرى: 29</h5>
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