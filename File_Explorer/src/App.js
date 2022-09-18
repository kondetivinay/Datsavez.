import React,{useState,useEffect} from "react";
import Homepage from "components/Homepage/Homepage";
import "styles/main.scss";
import Dashboard from "components/Dashboard/Dashboard";


function App() {
  const [pin,setPin]=useState(null);
  const[showDashboard,setShowDashboard]=useState(false);
  useEffect(()=>{
    setPin(JSON.parse(localStorage.getItem('pin')));
    if(pin){
      //console.log('asdfa');
      setShowDashboard(true);
    }
  },[pin]);
//console.log(pin);
  return (
    <>
      {showDashboard===true?<Dashboard setAccountPin={setPin} AccountPin={pin}/>:<Homepage setShowDashboard={setShowDashboard} setAccountPin={setPin}/>}
    </>
  );
}

export default App;
