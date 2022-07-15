import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, iconButtonClasses } from '@mui/material';
import logo from "../pictures/sharo-icon.png"


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350s"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Barber
          </Typography>
          <Typography variant="body2" color="text.secondary">
            testtesttesttesttesttesttesttesttesttest
            testtesttesttesttesttesttesttesttest
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
