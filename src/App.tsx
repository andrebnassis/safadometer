import React, { useEffect, useState } from 'react';
import safangel from './resources/safadometer_00.png'
import safademon from './resources/safadometer_01.png'
import AppBar from './AppBar';
import './App.css'
import { Typography } from '@mui/material';
import Footer from './Footer'
import { useTranslation } from 'react-i18next';
import useTranslateFullContent from './customHooks/useTranslateFullContent';

const App:React.FC = ()  => {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>('EN');

  useEffect(() => {
    console.log(lang.toLowerCase())
    i18n.changeLanguage(lang.toLowerCase());
    }, [lang, i18n]);

    const angelPercentageAmount = Math.round((Math.random()*100 + Number.EPSILON) * 100) / 100;
    const rascalPercentageAmount = (100 - angelPercentageAmount);
  
    const angelPercentageAmountString = angelPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0});
    const rascalPercentageAmountString = rascalPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0});

    
  const main = useTranslateFullContent('main','body',{
    angelPercentageAmount: angelPercentageAmountString,
    rascalPercentageAmount: rascalPercentageAmountString
  })


  return (

    <div style={{height:'100%', width:'100%'}}>  
      <AppBar onChangeLanguage={(data) => setLang(data)} />
      <div className="App">  
    <div className="image-container">
        <img style={{position:'absolute', left:'50%', top:'50%',  transform: 'translate(-50%,-50%)', clipPath:`inset(0% ${rascalPercentageAmountString}% 0% 0%)`}} src={safangel} alt="safangel" />
        <img style={{position:'absolute',  left:'50%', top:'50%', transform: 'translate(-50%,-50%)', clipPath:`inset(0% 0% 0% ${angelPercentageAmountString}%)`}} src={safademon} alt="safademon" />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Typography variant='h6'>
          {main}
        </Typography>
      </div>
      </div>
      <Footer/>

    </div>
  );
}



export default App;
