import React ,{useEffect} from 'react';
import DastavezLogo from '../Logo/DastavezLogo';
import classes from './LeftSideBar.module.scss';
import addFile from "../../images/addFile.svg";
import addFolder from "../../images/addFolder.svg";
import lock from "../../images/lock.svg";
import TreeComponent from '../Tree/TreeComponent';
import PropTypes from 'prop-types';

const LeftSideBar=({lockIt,isDarkMode,enterCrumbsAndKey,treeData=[],showCreateFolder,showCreateFile})=>{
  useEffect(() => {
    const sidebar = document.querySelector(`.${classes.div1}`);
    let startX, startWidth;
    const resizer = document.querySelector(`.${classes.resizer}`);

    function initDrag(e) {
      startX = e.clientX;
      startWidth = parseInt(sidebar.clientWidth, 10);
      document.documentElement.addEventListener("mousemove", doDrag, false);
      document.documentElement.addEventListener("mouseup", stopDrag, false);
    }

    function doDrag(e) {
     // console.log('drag');
      if (sidebar) {
        
        if(startWidth + e.clientX - startX>300 && startWidth + e.clientX - startX<=1030)sidebar.style.width =startWidth + e.clientX - startX + "px";
        else if(startWidth + e.clientX - startX<300)sidebar.style.width ="300px";
        else sidebar.style.width ="1030px";
        //console.log(sidebar);
      }
    }

    function stopDrag() {
      document.documentElement.removeEventListener("mousemove", doDrag, false);
      document.documentElement.removeEventListener("mouseup", stopDrag, false);
    }

    resizer?.addEventListener("mousedown", initDrag, false);
  }, []);

  const lockButtonHandler=(e)=>{
    e.preventDefault();
    // alert('lock button clicked');
    lockIt();
  }
  const addFolderHandler=()=>{
    showCreateFolder(true);
  }
  
  const addFileHandler=()=>{
    showCreateFile(true);
  }

  
    return(
      <div className={classes.outer}>
        <div className={isDarkMode?classes.div1_dark:classes.div1}>
          
          <DastavezLogo isDarkMode={isDarkMode}/>
          
          <div className={classes.buttons}>
    
            <button className={isDarkMode?classes.add_dark:classes.add}>
              <div onClick={addFileHandler}>
                <img src={addFile}/>
                <p>Add File</p>
              </div>
            </button> 

            <button className={isDarkMode?classes.add_dark:classes.add}>
              <div onClick={addFolderHandler}>
                <img src={addFolder}/>
                <p>Add Folder</p>
              </div>
            </button> 

          </div>
          <div className={classes.tree}>
            <TreeComponent treeData ={treeData} enterCrumbsAndKey={enterCrumbsAndKey} isDarkMode={isDarkMode}/>
          </div>
          
          <button className={isDarkMode?classes.lock_button_dark:classes.lock_button} onClick={lockButtonHandler} >
              <div >
                <img src={lock}/>
                <p>Lock Now</p>
              </div>
          </button> 

        </div>
        <div className={classes.resizer}>
          <div className={classes.one}></div>
          <div className={classes.two}></div>
        </div>
      </div>
    );
}
LeftSideBar.propTypes={
  lockIt:PropTypes.func,
  isDarkMode:PropTypes.bool,
  crumbsAndKey:PropTypes.object,
  enterCrumbsAndKey:PropTypes.func,
  treeData:PropTypes.array,
  showCreateFolder:PropTypes.func,
  showCreateFile:PropTypes.func,
}
export default LeftSideBar;