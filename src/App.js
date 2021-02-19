import './App.css';
import React, { useState } from 'react';
import { observer } from 'mobx-react'
import ControlBar from './components/control-bar';
import MainBox from './components/main-box';


const App = observer((props) => {
    
  const [data, setData] = useState({
    numsArray:[],
    barAmount:20,
    sortSpeed:1.0,
    minBarSize:100,
    maxBarSize:1000,
    currentAlgo:"bubbleSort",
    sorting:false,
    sortingMotions:[]
  },)

  // setNumsArray={setNumsArray} updateBarAmount={updateBarAmount}
  return (
      <div>
        <ControlBar data={data} setData={setData} />
        <MainBox data={data} setData={setData}/>
      </div>
  )

})
        
export default App;


