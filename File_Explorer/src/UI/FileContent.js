import React,{useState} from 'react';
import classes from './Modal.module.css';
import PropTypes from 'prop-types';
//import Editor from "cuvette-text-editor";

const FileContent=({fileDetails,setShowFileContentModal})=>{
    const[enteredFileContent,setEnteredFileContent]=useState(fileDetails.content);
    //console.log(fileDetails);
    const fileContentHandler=(e)=>{
        setEnteredFileContent(e.target.value);
    }
    const cancelHandler=()=>{
        setEnteredFileContent('');
        setShowFileContentModal(false);
       // console.log('xpxpx');
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        localStorage.setItem(fileDetails.key,JSON.stringify({
            key:fileDetails.key,
            content:enteredFileContent,
            label:fileDetails.label,
        }));
        setShowFileContentModal(false);
    }
    

    return(
        <form className={classes.backdrop} >
            <div className={classes.modal}>
                <div className={classes.contents}>
                    <h2 className={classes.heading}>{fileDetails.label}</h2>
                    <textarea  className={classes.fileContentModal_input} onChange={fileContentHandler} value={enteredFileContent} name="message" rows="10" cols="30"/>
                    {/* <input  className={classes.fileContentModal_input} type='text' value={enteredFileContent} onChange={fileContentHandler}/> */}
                    {/* <Editor className={classes.fileContentModal_input} defaultValue={} onChange={(value) => setEnteredFileContent(value)}/> */}
                    <div>
                        <div className={classes.buttons}>
                            <button type="button" onClick={cancelHandler}>
                                Cancel
                            </button>
                            <button type="button" className={classes.unlock} onClick={onSubmitHandler} >
                                Save
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </form>
    
    );

}
FileContent.propTypes={
    fileDetails:PropTypes.object,
    setShowFileContentModal:PropTypes.func 
}
export default FileContent;