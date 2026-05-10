import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  './InfoBox.css'
export default function InfoBox({info}){

return(

    <div className="InfoBox">
<div className="cardContainer">

    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
       
        
        // image={info.image}
      />
      <img
  src={`https://openweathermap.org/img/wn/${info.icon}@2x.png`}
  alt="weather icon"
/>  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       <p>Temperature :  {info.temp}  </p> 
              <p>Temperature Max :   {info.tempMax}  </p> 

       <p>Temperature Min :    {info.tempMin}  </p> 

       <p>Description:    {info.description}  </p> 
      </Typography>
      </CardContent>
     
    </Card>
    </div>

        </div>

)

}