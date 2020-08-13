import './App.css';
import React, { useState } from 'react';
import { observer } from 'mobx-react'
import ControlBar from './components/control-bar';
import Bars from './components/bars';


const App = observer((props) => {
    
  const [numsArray, setNumsArray] = useState([1,2,3])


  const getRandomArbitrary =  (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const createRandomNumsArray = (numsAmmount, minNumsRange, maxNumsRange) => {
    let newNums = [] 
    debugger
    for(let i=0; i++; i<numsAmmount){
      let newNum = getRandomArbitrary(minNumsRange,maxNumsRange)
      newNums.push(newNum)
    }
    setNumsArray([...newNums])
  }
    return (
       <div>
         <ControlBar createRandomNumsArray={createRandomNumsArray}/>
         <Bars numsArray={numsArray}/>
       </div>
    )
})
        
export default App;


