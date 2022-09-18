import React from "react";
import classes from './DastavezLogo.module.css';
import logo from '../../images/d.png';
import PropTypes from 'prop-types';

const DastavezLogo=({isDarkMode})=>{
    return(
        <div className={isDarkMode?classes.div_dark:classes.div}>
            <img src={logo} alt="cuvette logo"/>
            <h1 className={classes.name}>astavez</h1>    
        </div>
                    
    )
}
DastavezLogo.propTypes={
    isDarkMode:PropTypes.bool,
}
export default DastavezLogo;