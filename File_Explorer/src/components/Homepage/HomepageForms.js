import React, { useState } from "react";
import classes from './HomepageForms.module.css';
import PropTypes from 'prop-types';

const HomepageForms=({setShowDashboard,setAccountPin})=>{
    const [pin,setPin]=useState('');
    const [confirmedPin,setConfirmedPin]=useState('');
    const [hasError,setHasError]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    
    const pinChangeHandler=(e)=>{
        setPin(e.target.value);    
    }
    const confirmedPinChangeHandler=(e)=>{
        setConfirmedPin(e.target.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
       // console.log("jghv");
        if(pin.length!=4){
            setHasError(true);
            setErrorMessage('*pin must be of length 4');
            return;
        }
        if(pin===confirmedPin){
           // alert('pin confirmed');
            localStorage.setItem('pin',JSON.stringify(pin));
            setAccountPin(pin);
            setHasError(false);
            setShowDashboard(true);
        }
        else{
            setHasError(true);
            setErrorMessage('*pin does not matches');
        }
        
        return;
    }
   
    return(
        <form className={classes.forms} onSubmit={onSubmitHandler}>
            <h3>Set your 4-digit account pin</h3>
            <input type="number" onChange={pinChangeHandler} value={pin} placeholder='Enter new Pin'/>
            
            <input type="number" onChange={confirmedPinChangeHandler} value={confirmedPin} placeholder='Confirm new Pin'/>
            {hasError && <p className={classes.error_text}>{errorMessage}</p>}
          
            <button onClick={onSubmitHandler}>Submit</button>
        </form>
    );
}
HomepageForms.propTypes={
    setShowDashboard:PropTypes.func,
    setAccountPin:PropTypes.func,
}
export default HomepageForms;