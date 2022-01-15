import React from 'react';
import safadometer_raw from './resources/safadometer_raw.png'
import safangel from './resources/safadometer_00.png'
import safademon from './resources/safadometer_01.png'


const App:React.FC = ()  => {
  const angelPercentageAmount = Math.round((Math.random()*100 + Number.EPSILON) * 100) / 100;
  const rascalPercentageAmount = (100 - angelPercentageAmount);

  const angelPercentageAmountString = angelPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0});
  const rascalPercentageAmountString = rascalPercentageAmount.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:0});

  return (
    <div>
        <img style={{position:'absolute', clipPath:`inset(0% ${rascalPercentageAmountString}% 0% 0%)`}} src={safangel} alt="safangel" />
        <img style={{position:'absolute', clipPath:`inset(0% 0% 0% ${angelPercentageAmountString}%)`}} src={safademon} alt="safademon" />
        <p>
        Today you've been {
            angelPercentageAmountString
          }% angel but those {
            rascalPercentageAmountString
          }% is rascal!
        </p>  
      
    </div>
  );
}

export default App;
