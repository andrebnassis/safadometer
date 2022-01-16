import React from 'react';
import safangel from './resources/safadometer_00.png'
import safademon from './resources/safadometer_01.png'
import AppBar from './AppBar';
import './App.css'
import { Typography } from '@mui/material';

const App:React.FC = ()  => {
  const angelPercentageAmount = Math.round((Math.random()*100 + Number.EPSILON) * 100) / 100;
  const rascalPercentageAmount = (100 - angelPercentageAmount);

  const angelPercentageAmountString = angelPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0});
  const rascalPercentageAmountString = rascalPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0});

  return (

    <div style={{height:'100%', width:'100%'}}>  
    <AppBar />
    <div className="App">  
    <div className="image-container">
        <img style={{position:'absolute', left:'50%', top:'50%',  transform: 'translate(-50%,-50%)', clipPath:`inset(0% ${rascalPercentageAmountString}% 0% 0%)`}} src={safangel} alt="safangel" />
        <img style={{position:'absolute',  left:'50%', top:'50%', transform: 'translate(-50%,-50%)', clipPath:`inset(0% 0% 0% ${angelPercentageAmountString}%)`}} src={safademon} alt="safademon" />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Typography variant='h6'>
        Today you've been {
            angelPercentageAmountString
          }% angel but those {
            rascalPercentageAmountString
          }% is rascal!
        </Typography>
      </div>
      </div>
      </div>
  );
}

export default App;
