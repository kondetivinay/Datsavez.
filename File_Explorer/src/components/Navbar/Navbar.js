import React,{useState} from 'react';
import classes from "./Navbar.module.css";
import search_icon from "../../images/search.png";
import settings_icon from "../../images/settings_icon.svg"
import addIcon from "../../images/add.svg"
import beam from "../../images/beam.svg"
import PropTypes from 'prop-types';
import folderIcon from  "../../images/folder.svg"
import fileIcon from  "../../images/file.svg"
import imageFileIcon from "../../images/image_file.svg"
import smallFileIcon from "../../images/smallFile.svg"
import smallFolderIcon from "../../images/smallClosedFolder.svg"
import moon from "../../images/moon.svg"

const Navbar=({
  isDarkMode,DarkModeHandler,crumbs,
  key_,showCreateFolder,showCreateFile,
  setShowResetPinModal,setCrumbsAndKey,setShowFileContentModal,
  setFileDetails,allFilesFolders=[]
})=> {
  const [showAddOptions,setShowAddOptions]=useState(false);
  const [showResetPinOption,setShowResetPinOption]=useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    console.log(searchWord);
    const newFilter = allFilesFolders.filter((value) => {
      return value.label.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(newFilter);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const modeClickHandler=()=>{
    DarkModeHandler();
  }
  
  let list=[];
  if(localStorage.getItem(key_)!==null){
    list=JSON.parse(localStorage.getItem(key_));
  }
  const showAddOptionsHandler=()=>{
    if(showResetPinOption===true){
      setShowResetPinOption(false);
    }
    setShowAddOptions(x=>!x);
  }
  const showResetPinHandler=()=>{
    if( showAddOptions===true){
      setShowAddOptions(false);
    }
    setShowResetPinOption(x=>!x);
  }
  const iconIdentifier=(type)=>{
    if(type==="folder")return folderIcon;
    if(type==="imageFile")return imageFileIcon;
    if(type==="file")return fileIcon;
  }

  const onClickCreateFolderHandler=(e)=>{
    e.preventDefault();
    showCreateFolder(true);
  }
  const onClickCreateFileHandler=(e)=>{
    e.preventDefault();
    showCreateFile(true);
  }
  
  const onClickResetPinHandler=(e)=>{
    e.preventDefault();
    setShowResetPinModal(true);
  }
  const onClickSearchResultsHandler=(obj)=>{
    setFilteredData([]);
    setWordEntered("");
    onClickFileFolderHandler(obj);
  }

  const onClickFileFolderHandler=(obj)=>{
    console.log(obj);
    if(obj.type==="folder"){
      setCrumbsAndKey({crumbs:obj.crumbs,key:obj.key});
      
    }
    else{
      const x={key:obj.key,content:"",label:obj.label}
      const temp=JSON.parse(localStorage.getItem(obj.key));
      if(temp){
        setFileDetails(temp);
        setShowFileContentModal(true);
      }
      else setFileDetails(x);
      setShowFileContentModal(true);
    }
  }
 // console.log(setCrumbsAndKey,showCreateFolder);
  return (
  <div className={classes.cover}>
    <div className={isDarkMode?classes.outer_dark:classes.outer}>

      <div className={isDarkMode?classes.nav_dark:classes.nav}>

        <div className={classes.search}>
          <div className={isDarkMode?classes.bar_dark:classes.bar} >
            <img src={search_icon}/>
            <input className={isDarkMode?`${classes.searchbar_dark}`:classes.searchbar} value={wordEntered}
            onChange={handleFilter} type="text" title="Search" placeholder='Search...'/>
          </div>

          {filteredData.length>0 && (

            <div className={isDarkMode?classes.dataResult_dark:classes.dataResult}>
              {filteredData.slice(0, 15).map((data) => {
                return (
                  <div key={data.key} className={classes.dataItem}  onClick={()=>onClickSearchResultsHandler(data)}>
                    <img src={data.type==='file'?smallFileIcon:smallFolderIcon}/>
                    <p>{data.label}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
          <button className={classes.modes} onClick={modeClickHandler}>
            <div >
              <img src={isDarkMode?moon:beam}></img>
              <p>{isDarkMode?'Dark Mode':'Light Mode'}</p>
            </div>
          </button> 

          <div className={classes.settings_cover}>

             
                <button onClick={showAddOptionsHandler} className={isDarkMode?` ${classes.add_Icon_dark}`:classes.add_Icon}>
                  <img src={addIcon}/>
                </button>

                {showAddOptions && (
                 
                    <div className={isDarkMode?classes.addOptions_dark:classes.addOptions} onClick={showAddOptionsHandler}>
                      <button  onClick={onClickCreateFileHandler}>New File</button>
                      <button onClick={onClickCreateFolderHandler}>New Folder</button>
                    </div>
                  )
                }
             
                  <button className={isDarkMode?`${classes.settings_dark}`:classes.settings} onClick={showResetPinHandler}>
                    <img src={settings_icon} />
                  </button>

                  {showResetPinOption && (
                    
                      <div className={isDarkMode?classes.addOptions_dark:classes.addOptions} onClick={showResetPinHandler}>
                        <button  onClick={onClickResetPinHandler}>Reset Pin</button>
                      </div>
                    
                    )
                  }
          </div>
      </div>

      <div className={isDarkMode?classes.crumbs_dark:classes.crumbs}>{crumbs}</div>
    
    </div>
    <div className={isDarkMode?classes.contents_dark:classes.contents}>
      {
        (list && list.length>0 && list.map((obj) => (
          <div className={classes.icons} key={obj.key} onClick={()=>onClickFileFolderHandler(obj)}>
            <img   src={iconIdentifier(obj.type)} />
            <p className={isDarkMode?classes.icon_name_dark:classes.icon_name}>{obj.label}</p>
          </div>
          
        )))
      }
    </div>
  </div>  
);

  
}
Navbar.propTypes={
  isDarkMode:PropTypes.bool,
  DarkModeHandler:PropTypes.func,
  crumbs:PropTypes.string,
  setCrumbsAndKey:PropTypes.func,
  displayContents:PropTypes.array,
  key_:PropTypes.string,
  showCreateFolder:PropTypes.func,
  showCreateFile:PropTypes.func ,
  setShowResetPinModal:PropTypes.func,
  setShowFileContentModal:PropTypes.func,
  setFileDetails:PropTypes.func,
  allFilesFolders:PropTypes.array
}
export default Navbar;
