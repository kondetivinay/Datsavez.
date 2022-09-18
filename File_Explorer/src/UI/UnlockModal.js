import React,{useState,useEffect} from 'react';
import classes from './Modal.module.css';
import PropTypes from 'prop-types';

const UnlockModal=({AccountPin,setLock})=>{
    
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const[error,setError]=useState(false);
    //console.log(error)
   useEffect(()=>{
       document.getElementById("0").focus();
   },[])

   
    const onClickUnlockHandler=()=>{
       
        const enteredPin=otp.join("")
       
        if(enteredPin==AccountPin){
            setLock(false);
            console.log('matched');
        }
        else{
            setError(true);
        }
    }
    function handleBackspace(e,index){
       
        if(document.getElementById(String(index)).value.length!=0){
            setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
        }
        if(index>0){
            document.getElementById(String(index-1)).focus();
        }
       
    }
    const handleChange = (element, index) => {
        //  console.log(element,index);
        if(isNaN(element.value)){
            return;
        }
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
       
        if(element.value!='' && element.nextSibling && index!=4){
            element.nextSibling.focus();
        }
    };
   
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <div className={classes.contents}>
                    <h2 className={classes.heading}>Enter Account Pin</h2>
                    <div className={classes.inputs}>
                    {otp.map((data, index) => {//generates input boxes
                        return (
                            <input 
                                className={classes.pin_feild}
                                type="text"
                                name="otp"
                                maxLength="1"
                                id={String(index)}
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                //  onKeyPress={(e)=>onKeyPressHandler(e,index)}
                                 onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      onClickUnlockHandler();
                                    } else if (e.key === "Backspace") {
                                        // console.log('bsc');
                                        handleBackspace(e,index);
                                     // handleBackspace(e,index);
                                    }
                                  }
                                }
                            />
                        );
                    })}
                    </div>
                    <p className={classes.error_message}>{error ? "*Incorrect Pin":"  "}</p>
                   
                        <button className={classes.unlock_button}  onClick={onClickUnlockHandler}>
                            Unlock
                        </button>
                   
                </div>
            </div>
        </div>
    );
}
UnlockModal.propTypes={
    AccountPin:PropTypes.string,
    setLock:PropTypes.func
}
export default UnlockModal;