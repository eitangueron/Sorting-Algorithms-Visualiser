import React , { useEffect }from 'react';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';
// import NavigationIcon from '@material-ui/icons/Navigation';

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
    useEffect(generateNewBars, [data.barAmount])

    const updateBarAmount = (value) => {
        props.setData({...data, barAmount:value})
    }

    const updateSortingSpeed = (value) => {
        props.setData({...data, sortSpeed:value})
    }
    

    return (
       <div id="controlBar-container">
           <div id="controlBar-setters-left">
                <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}} onClick={generateNewBars}> Create New Array </Button>
                <div id="barAmount-slider-container">
                    <Typography id="barAmount-slider" gutterBottom> Bar Amount: </Typography>
                    <Slider defaultValue={20} step={5} min={5} max={100} style={{color:"#3498db"}}
                        aria-labelledby="barAmount-slider" valueLabelDisplay="auto"
                        // marks 
                        onChangeCommitted={(event, value) => updateBarAmount(value)}
                        />
                </div>
                <div id="speedSet-slider-container">
                    <Typography id="speedSet-slider" gutterBottom> Visulaizer Speed: </Typography>
                    <Slider defaultValue={1} step={0.2} min={0.2} max={3} style={{color:"#3498db"}}
                        aria-labelledby="speedSet-slider" valueLabelDisplay="auto"
                        // marks 
                        onChangeCommitted={(event, value) => updateSortingSpeed(value)}
                        />
                </div>
           </div>

           <div id="controlBar-sortGo-center">
                {/* <Fab variant="extended" color="primary" aria-label="add"> <NavigationIcon /> Sort! </Fab> */}
                <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}}> Sort! </Button>
            </div>

           <div id="controlBar-chooseSortAlgo-right">
                <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}}> Merge Algo! </Button>
            </div>

       </div>
    )
}
        
export default ControlBar;
