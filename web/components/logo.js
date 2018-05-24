import React from 'react';
import reactLogo from './logo.svg';
import './logo.css';


const logo = (props) => {
const logoSpin = props.logoSpin
  if(logoSpin == false){
    return <img className="loader center-block" src={reactLogo} alt="logo" />;
  }else{
      return <img className="logo-spin center-block" src={reactLogo} alt="logo" />;
  }
};

export default logo;
