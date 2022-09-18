import React,{useState,useEffect} from 'React';
import PropTypes from 'prop-types';

const FolderContents=([key])=>{

    const [contents,setContents]=useState([]);


    useEffect(()=>{
        const list=localStorage.getItem(key);
        setContents(list);
        console.log(list);
      },[contents]);

    return(
        <button>MYfiles</button>
    )
}
FolderContents.propTypes={
    key:PropTypes.string,
}
export default FolderContents;