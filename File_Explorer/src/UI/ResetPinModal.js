import React,{useState} from 'react';
import classes from './Modal.module.css'
import eye from '../images/eye.svg'
import PropTypes from 'prop-types';

const ResetPinModal=({setShowResetPinModal,setLock,setAccountPin})=>{
    const [pin,setPin]=useState('');
    const [confirmedPin,setConfirmedPin]=useState('');
    const [hasError,setHasError]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const [type,setType]=useState('password');

    const onClickEyeHandler=()=>{
        if(type==='password'){
            setType('number');
        }
        else(setType('password'))
    }
    const pinChangeHandler=(e)=>{
        setPin(e.target.value);    
    }
    const confirmedPinChangeHandler=(e)=>{
        setConfirmedPin(e.target.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        //console.log("jghv");
        if(pin.length!=4){
            setHasError(true);
            setErrorMessage('*pin must be of length 4');
            return;
        }
        if(pin===confirmedPin){
           // alert('pin confirmed');
            localStorage.setItem('pin',JSON.stringify(pin));
            setHasError(false);
            setErrorMessage('')
            setShowResetPinModal(false);
            setLock(true);
            setAccountPin(pin);
          
        }
        else{
            setHasError(true);
            setErrorMessage('*pin does not matches');
        }
        
        return;
    }
    const cancelHandler=()=>{
       // console.log('cnacellll')
       setShowResetPinModal(false);
       setErrorMessage('');
       setConfirmedPin('');
       setPin('');
       setType('password');
   }

    return (
        <form className={classes.backdrop} >
            <div className={classes.modal}>
                <div className={classes.contents}>
                    <h2 className={classes.heading}>Reset Pin</h2>
                    <div className={classes.reset_pin}>
                        <div className={classes.reset_pin_contents}>
                            <h2>Enter New Pin</h2>
                            <div className={classes.reset_pin_input}>
                                <input className={classes.reset_pin_name} onChange={pinChangeHandler} type={type} placeholder='Enter New Pin' />
                                <img src={eye} onClick={onClickEyeHandler}/>
                            </div>
                            
                        </div>
                        <div className={classes.reset_pin_contents}>
                            <h2>Confirm New Pin</h2>
                            <div className={classes.reset_pin_input}>
                                <input className={classes.reset_pin_name} onChange={confirmedPinChangeHandler} type={type} placeholder='Confirm New Pin' />
                                <img src={eye} onClick={onClickEyeHandler}/>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <p className={classes.error_message}>{hasError?errorMessage:" "}</p>
                        <div className={classes.buttons}>
                            <button type="button" onClick={cancelHandler}>
                                Cancel
                            </button>
                            <button type="button" className={classes.unlock} onClick={onSubmitHandler} >
                                Reset Pin
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </form>
    );
}
ResetPinModal.propTypes={
    setShowResetPinModal:PropTypes.func,
    setLock:PropTypes.func,
    setAccountPin:PropTypes.func
}
export default ResetPinModal;