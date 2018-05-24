import React from 'react';
import reactLogo from './logo.svg';
import './errorMessage.css';


const errorMessage = (props) => {
const errorOrNot = props.errorOrNot
  if(errorOrNot == false){
    return <div> </div>;
  }else{
      return <div ><p id="errMessage"> E-mail or password is incorrect </p> </div>;
  }
};

export default errorMessage;
