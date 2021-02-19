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
            newNums.push({num:newNum, selected:false, swapped:false})
        }
        setNumsArray([...newNums])
    }
    const generateNewBars = () => {
        createRandomNumsArray(data.barAmount, data.minBarSize, data.maxBarSize)
    }
    
    /// data setters:
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
    const updateCurrentAlgo = (value) => {
        props.setData({...data, currentAlgo:value})
    }
// eslint-disable-next-line
    const allBarsGreenEffect = (barsArr) => {

    }
  
    const sort = (motions,index,newBarsArray) => {
        if(index===motions.length){ return }      //stop recurssion
        // const sortedBarsData = bubbleSort(data.numsArray)   //retrive motions
        // const newBarsArray = [...data.numsArray]
        const action = motions[index]
        const bar1 = action.bar1Index
        const bar2 = action.bar2Index
        
        // console.log(action)

        newBarsArray[bar1].selected = true 
        newBarsArray[bar2].selected = true
        setNumsArray(newBarsArray)   //show current comapre - purple light

        setTimeout(()=>{
            newBarsArray[bar1].selected = false
            newBarsArray[bar2].selected = false
            if(action.swapped){
                let temp = newBarsArray[bar1]   //swap
                newBarsArray[bar1]=newBarsArray[bar2]
                newBarsArray[bar2]=temp
                newBarsArray[bar1].swapped = true
                newBarsArray[bar2].swapped = true
                setNumsArray(newBarsArray)  //swapped - show green light
                setTimeout(()=>{            
                    newBarsArray[bar1].swapped = false
                    newBarsArray[bar2].swapped = false
                    setNumsArray(newBarsArray)  // turn off green light
                },500)
            }
        },500)
        setNumsArray(newBarsArray)  // turn off purple light

        setTimeout( () => {
            sort(motions,index+1,newBarsArray)
        }, 500);
    }
    // setNumsArray(sortedBarsData.arr)

    const sortingIt = () => {
        const sortedBarsData = bubbleSort(data.numsArray)   //retrive motions
        const numsArray = [...data.numsArray]
        sort(sortedBarsData.motions,0,numsArray)
    }

    return (
        <AppBar position="static">
       <div id="controlBar-container">

           <div id="controlBar-setters-left">
                
                <div id="speedSet-slider-container">
                    <Typography id="speedSet-slider" gutterBottom> Visulaizer Speed: </Typography>
                    <Slider defaultValue={1} step={0.2} min={0.2} max={3} style={{color:"black"}}
                        aria-labelledby="speedSet-slider" valueLabelDisplay="auto"
                        // marks 
                        onChangeCommitted={(event, value) => updateSortingSpeed(value)}
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
                onClick={sortingIt}
                > Sort! </Button>

            </div>

       </div>
       </AppBar>
    )
}
        
export default ControlBar;
