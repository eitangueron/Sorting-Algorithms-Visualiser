import './App.css';
import React, { useState } from 'react';
import { observer } from 'mobx-react'
import ControlBar from './components/control-bar';
import MainBox from './components/main-box';


const App = observer((props) => {
    
  const [data, setData] = useState({
    numsArray:[1,2,3],
    barAmount:20,
    sortSpeed:1,
    minBarSize:1,
    maxBarSize:1000,
  },)

  // const updateBarAmount = (newAmount) => {
  //   setData({...data, barAmount:newAmount})
  // }
  
  const setNumsArray = (newArray) => {
    setData({...data, numsArray: newArray})
  }

  // const [numsArray, setNumsArray] = useState([1,2,3])

  return (
      <div>
        <ControlBar setNumsArray={setNumsArray}/>
        <MainBox id="main-box" numsArray={data.numsArray}/>
        {/* <ControlBar setNumsArray={setNumsArray}/>
        <MainBox id="main-box" numsArray={numsArray}/> */}
      </div>
  )

})
        
export default App;


