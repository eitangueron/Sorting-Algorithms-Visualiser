import React , { useEffect }from 'react';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';
// import NavigationIcon from '@material-ui/icons/Navigation';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
// import FormHelperText from '@material-ui/core/FormHelperText';
import AppBar from '@material-ui/core/AppBar';
import InputLabel from '@material-ui/core/InputLabel';

import bubbleSort from '../algo-helpers/bubbleSort'
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

    const convertBarAmountToSpeed = (barAmount) => {
        if(barAmount>80){
            return 1
        } else if (barAmount>60){
            return 4
        } else if(barAmount>40){
            return 8
        } else if(barAmount>20){
            return 12
        } else if (barAmount>5){
            return 16
        } else {
            return 20
        }
    }
    
    /// data setters:
    const setNumsArray = (newArray) => {
        props.setData({...data, numsArray: newArray})
    }
    useEffect(generateNewBars, [data.barAmount])

    const updateBarAmount = (value) => {
        props.setData({...data, barAmount:value, sortSpeed:convertBarAmountToSpeed(value)})
    }
    const updateSortingSpeed = (value) => {
        props.setData({...data, sortSpeed:value})
    }
    const updateCurrentAlgo = (value) => {
        props.setData({...data, currentAlgo:value})
    }

    const sort = () => {
        const sortedBarsData = bubbleSort(data.numsArray)   //retrive animations
        const motions = sortedBarsData.motions
        for( let i=0; i<motions.length; i++){
            const bars = document.getElementsByClassName("bar")
            const barsInnerText = document.getElementsByClassName("bar-size")
            const action = motions[i]
            const bar1 = action.bar1Index
            const bar2 = action.bar2Index
            const bar1Style = bars[bar1].style
            const bar2Style = bars[bar2].style
            if(i%2===0){        //select
                setTimeout( () => {
                    bar1Style.backgroundColor = "yellow"
                    bar2Style.backgroundColor = "yellow"
                },i*data.sortSpeed)
            } else {
                setTimeout( () => {
                    bar1Style.backgroundColor = "#3498db"
                    bar2Style.backgroundColor = "#3498db"
                    if(action.swapped){     //swap height
                        let temp = bar1Style.height
                        bar1Style.height = bar2Style.height
                        bar2Style.height = temp

                        if(data.barAmount<=30){     //num visable - updatding values
                            let tempNum = barsInnerText[bar1].textContent
                            barsInnerText[bar1].textContent = barsInnerText[bar2].textContent
                            barsInnerText[bar2].textContent = tempNum
                        }

                    }
                    },i*data.sortSpeed)
                }
        }

        setTimeout( () => {     //tooltips critical
            setNumsArray(sortedBarsData.sortedArr)
        }, motions.length*data.sortSpeed)
    }

    return (
        <AppBar position="static">
       <div id="controlBar-container">

           <div id="controlBar-setters-left">
                
                <div id="speedSet-slider-container">
                    <Typography id="speedSet-slider" gutterBottom> Visulaizer Speed: </Typography>
                    <Slider defaultValue={12} step={4} min={1} max={20} style={{color:"black"}}
                    aria-labelledby="speedSet-slider" 
                    // track="inverted"
                    onChangeCommitted={(event, value) => updateSortingSpeed(value)}
                    value={data.sortSpeed}
                    disabled={data.running}
                    />
                </div>

                <div id="barAmount-slider-container">
                    <Typography id="barAmount-slider" gutterBottom> Bar Amount: </Typography>
                    <Slider defaultValue={20} step={5} min={5} max={100} style={{color:"black"}}
                        aria-labelledby="barAmount-slider" valueLabelDisplay="auto"
                        // marks 
                        onChangeCommitted={(event, value) => updateBarAmount(value)}
                        />
                </div>

                <Button variant="contained" onClick={generateNewBars} style={{background:"white", fontSize:"16px", fontWeight:'bold', textTransform:"none", lineHeight:"1.3"}}> Create New Bars </Button>

           </div>

           <div id="controlBar-chooseSortAlgo-right">
                <FormControl>
                <InputLabel shrink htmlFor="age-native-label-placeholder">Pick an algorithem</InputLabel>
                    <NativeSelect 
                    onChange={(event) => updateCurrentAlgo(event.target.value)}
                    // value={state.age} name="age" className={classes.selectEmpty} inputProps={{ 'aria-label': 'age' }}
                    >
                    <option value="bubbleSort">Bubble sort</option>
                    <option value="mergeSort">Merge sort</option>
                    <option value="quickSort">Quick sort</option>
                    </NativeSelect>
                    {/* <FormHelperText>Pick an algorithem</FormHelperText> */}
                </FormControl>
                
                <Button variant="contained" style={{background:"white", marginLeft:"1vw", fontSize:"20px", fontWeight:'bold'}}
                onClick={sort}
                > Sort! </Button>

            </div>

       </div>
       </AppBar>
    )
}
        
export default ControlBar;
