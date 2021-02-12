import './App.css';
import React, { useState } from 'react';
import { observer } from 'mobx-react'
import ControlBar from './components/control-bar';
import MainBox from './components/main-box';


const App = observer((props) => {
    
  const [numsArray, setNumsArray] = useState([1,2,3])

  return (
      <div>
        <ControlBar setNumsArray={setNumsArray}/>
        <MainBox id="main-box" numsArray={numsArray}/>
      </div>
  )

})
        
export default App;


