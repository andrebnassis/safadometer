import React, { useEffect, useMemo, useState } from 'react';
import safangel from './resources/safadometer_00.png'
import safademon from './resources/safadometer_01.png'
import AppBar from './AppBar';
import './App.css'
import { Box, Typography } from '@mui/material';
import Footer from './Footer'
import { useTranslation } from 'react-i18next';
import useTranslateFullContent from './customHooks/useTranslateFullContent';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const sharedUrl = 'https://andrebnassis.github.io/safadometer/';
const App:React.FC = ()  => {

  const { i18n } = useTranslation();
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
    angelPercentageAmount: angelPercentageAmountString,
    rascalPercentageAmount: rascalPercentageAmountString
  })

  const valuesExp = '/(' + angelPercentageAmountString + '%)|(' + rascalPercentageAmountString + '%)/g';
  const mainContentArr = mainContent.split(valuesExp).filter(n => n);

  return (

    <div style={{height:'100%', width:'100%'}}>  
      <AppBar onChangeLanguage={(data) => setLang(data)} />
      <div className="App">  
     
    <div className="image-container">
        <img style={{position:'absolute',  maxWidth: '482px', width:'100%', height:'auto', left:'50%', top:'50%',  transform: 'translate(-50%,-50%)', clipPath:`inset(0% ${rascalPercentageAmountString}% 0% 0%)`}} src={safangel} alt="safangel" />
        <img style={{position:'absolute',  maxWidth: '482px', width:'100%', height:'auto', left:'50%', top:'50%', transform: 'translate(-50%,-50%)', clipPath:`inset(0% 0% 0% ${angelPercentageAmountString}%)`}} src={safademon} alt="safademon" />
      </div>
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap: 'wrap'}}>
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
      </Box>
      <Box sx={{display:'flex', "& button":{margin: '2px'}}}>
        <FacebookShareButton url={sharedUrl} quote={mainContent} hashtag='#safadometer' windowHeight={window.innerHeight*0.9}>
        <FacebookIcon
          size={28}
          round={false}
          />
         </FacebookShareButton>
         <TwitterShareButton url={sharedUrl} title={mainContent} hashtags={['safadometer']}  windowHeight={window.innerHeight*0.9}>
        <TwitterIcon
          size={28}
          round={false}
          />
         </TwitterShareButton>
        <WhatsappShareButton url={sharedUrl} title={mainContent}  windowHeight={window.innerHeight*0.9}>
        <WhatsappIcon
          size={28}
          round={false}
          />
        </WhatsappShareButton>
      </Box>
      </Box>
     
      
      </div>
      <Footer/>

    </div>
  );
}



export default App;
