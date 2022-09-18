import React from "react";
import TreeNode from './TreeNode'; 
import PropTypes from 'prop-types';
import classes from './HelperTree.module.css'
const HelperTree=({data=[],isDarkMode,crumbString,enterCrumbsAndKey})=>{//tree
    return(
        
          <ul className={classes.div1}>{
            (data.map((tree) => (
              <TreeNode key={tree.key}  enterCrumbsAndKey={enterCrumbsAndKey} crumbString={crumbString} isDarkMode={isDarkMode} node={tree}/>
            )))
            }
          </ul>
        
    
    )
}

HelperTree.propTypes={
  data:PropTypes.array,
  isDarkMode:PropTypes.bool,
  crumbString:PropTypes.string,
  enterCrumbsAndKey:PropTypes.func
}

export default HelperTree;