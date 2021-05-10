import './App.css';
import React, { useState } from 'react';
import { observer } from 'mobx-react'
import ControlBar from './components/control-bar';
import MainBox from './components/main-box';


const App = observer((props) => {
    
  const [data, setData] = useState({
    numsArray:[],
    barAmount:20,
    sortSpeed:15,     //smaller is faster!! | due to slider design trick
    minBarSize:50,    //less bar wont b visable
    maxBarSize:1000,
    currentAlgo:"bubbleSort",
    isRunning:false
  },)

  return (
      <div>
        <ControlBar data={data} setData={setData} />
        <MainBox data={data} setData={setData}/>
      </div>
  )

})
        
export default App;


