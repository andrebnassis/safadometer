import React, { useEffect, useMemo, useState } from 'react';
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

  const value = useMemo(() => Math.round((Math.random()*100 + Number.EPSILON) * 100) / 100,[]);

  useEffect(() => {
    console.log(lang.toLowerCase())
    i18n.changeLanguage(lang.toLowerCase());
    }, [lang, i18n]);

    const angelPercentageAmount = value;
    const rascalPercentageAmount = (100 - value);
  
    const angelPercentageAmountString = angelPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0});
    const rascalPercentageAmountString = rascalPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0});

    
  const mainContent = useTranslateFullContent('main','body',{
    angelPercentageAmount: 'angelPercentageAmountString',
    rascalPercentageAmount: 'rascalPercentageAmountString'
  })

  const mainContentArr = mainContent.split(/(angelPercentageAmountString%)|(rascalPercentageAmountString%)/g).filter(n => n);

  return (

    <div style={{height:'100%', width:'100%'}}>  
      <AppBar onChangeLanguage={(data) => setLang(data)} />
      <div className="App">  
    <div className="image-container">
        <img style={{position:'absolute', left:'50%', top:'50%',  transform: 'translate(-50%,-50%)', clipPath:`inset(0% ${rascalPercentageAmountString}% 0% 0%)`}} src={safangel} alt="safangel" />
        <img style={{position:'absolute',  left:'50%', top:'50%', transform: 'translate(-50%,-50%)', clipPath:`inset(0% 0% 0% ${angelPercentageAmountString}%)`}} src={safademon} alt="safademon" />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap: 'wrap'}}>
        {mainContentArr.map(phrase => {
          if(phrase === 'angelPercentageAmountString%'){
            return (<Typography variant='h6' color="#09599F" component="span" sx={{margin:'0 4px 0 4px'}}>
            {
               angelPercentageAmountString
             }%
             </Typography>)
          }
          if(phrase === 'rascalPercentageAmountString%'){
            return (<Typography variant='h6' color="#9B0A0A" component="span" sx={{margin:'0 4px 0 4px'}}>
            {
             rascalPercentageAmountString
           }%
           </Typography>)
          }

          return  <Typography variant='h6' >{phrase}</Typography>
        })}
      </div>
      </div>
      <Footer/>

    </div>
  );
}



export default App;
