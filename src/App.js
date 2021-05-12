import './App.css';
import React, { useState } from 'react';
import { observer } from 'mobx-react'
import ControlBar from './components/control-bar';
import MainBox from './components/main-box';


const App = observer((props) => {
      
  const [data, setData] = useState(
    JSON.parse(sessionStorage.getItem('sortingAlgosCachedData')) ||
    {
    numsArray:[],
    barAmount: 20,
    sortSpeed: 15,     //smaller is faster!! | due to slider designing trick
    minBarSize:50,    //less then this bars wont b visable
    maxBarSize:999,
    currentAlgo: "bubbleSort",
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


