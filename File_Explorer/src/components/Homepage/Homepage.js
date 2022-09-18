import React from "react";
import classes from './Homepage.module.css';
import PropTypes from 'prop-types';
//import logo from '../../images/d.png';
import image from '../../images/man.svg';
import HomepageForms from './HomepageForms'
import DastavezLogo from '../Logo/DastavezLogo';
const Homepage=({setShowDashboard,setAccountPin})=>{
    
    return(
        
            <div className={classes.div1}>
                <div className={classes.div2}>
                    <DastavezLogo/>
                    <div className={classes.contents} >
                        <h1>Welcome to your dashboard</h1>
                        <p>This is homepage of your file explorer, set pin and lets go!</p>
                        <img src={image}></img>
                    </div>
                </div>
                <HomepageForms setAccountPin={setAccountPin} setShowDashboard={setShowDashboard}/>
            </div>
        
    )
}
Homepage.propTypes={
    setShowDashboard:PropTypes.func,
    setAccountPin:PropTypes.func,
}
export default Homepage;