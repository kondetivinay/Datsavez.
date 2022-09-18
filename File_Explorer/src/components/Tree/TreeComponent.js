import React from "react";
import HelperTree from'./HelperTree'
import classes from './TreeComponent.module.css'
import PropTypes from 'prop-types';

const TreeComponent=({isDarkMode,enterCrumbsAndKey,treeData=[]})=>{//tree list
  //console.log(treeData,typeof(treeData))
  let crumbString="";
    return(
         
            <div className={classes.class}>

                <HelperTree crumbString={crumbString}  enterCrumbsAndKey={enterCrumbsAndKey} isDarkMode={isDarkMode} data={treeData}/>
            </div>
        
  
    );
}
TreeComponent.propTypes={
  treeData:PropTypes.array,
  isDarkMode:PropTypes.bool,
  enterCrumbsAndKey:PropTypes.func
}
export default TreeComponent;