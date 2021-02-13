import React , { useEffect }from 'react';
import Button from '@material-ui/core/Button';
import './styles/control-bar.css';

const ControlBar = (props) => {
    
    const data = props.data

    const getRandomNum =  (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const createRandomNumsArray = (numsAmmount, minNumsRange, maxNumsRange) => {
        let newNums = [] 
        for(let i=0; i<numsAmmount; i++){
            let newNum = getRandomNum(minNumsRange,maxNumsRange)
            newNums.push(newNum)
        }
        setNumsArray([...newNums])
    }
    
    const generateNewBars = () => {
        createRandomNumsArray(data.barAmount, data.minBarSize, data.maxBarSize)
    }
    
    ///
    const setNumsArray = (newArray) => {
        props.setData({...data, numsArray: newArray})
    }

    const updateBarAmount = () => {
        props.setData({...data, barAmount:data.barAmount+10})
    }
    
    useEffect(generateNewBars, [data.barAmount])

    return (
       <div id="controlBar-container">
            <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}} onClick={generateNewBars}> Create New Array </Button>
            <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}} onClick={updateBarAmount}> Sort! </Button>
            <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}}> Merge Algo! </Button>
       </div>
    )
}
        
export default ControlBar;
