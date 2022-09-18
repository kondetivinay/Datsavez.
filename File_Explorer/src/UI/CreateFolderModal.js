import classes from './Modal.module.css'
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CreateFolderModal=({createFileFolderHandler,showCreateFolder})=>{
    const [folderName,setFolderName]=useState('');
    const [error,setError]=useState('');

    const folderNameHandler=(e)=>{
        if(e.target.value/length!=0){
            setFolderName(e.target.value.trim());
            return;
        }
         setError(true);
        return;
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(folderName.length!=0){
         //  alert('valid');
         createFileFolderHandler({type:"folder",folderName});
           setFolderName('');
        }
         setError(true);
        return;
    }
    const cancelHandler=()=>{
        setFolderName('');
        showCreateFolder(false);
        console.log("cancelled");

    }
    
    //console.log(folderName,error);
    return (
        <form className={classes.backdrop} onSubmit={submitHandler}>
            <div className={classes.modal}>
                <div className={classes.contents}>
                    <h2 className={classes.heading}>Create Folder</h2>
                    <div className={classes.folder_name}>
                        <input type='text' placeholder='Enter Folder Name' onChange={folderNameHandler}/>
                    </div>
                    {error && <p className={classes.error_message}>*Enter a valid name</p>}
                    <div className={classes.buttons}>
                        <button type="button" onClick={cancelHandler}>
                            Cancel
                        </button>
                        <button type="button" className={classes.unlock} onClick={submitHandler} >
                            Create
                        </button>
                    </div>
                    
        
                </div>
            </div>
        </form>
    );
}
CreateFolderModal.propTypes={
    createFileFolderHandler:PropTypes.func,
    showCreateFolder:PropTypes.func,
}
export default CreateFolderModal;
