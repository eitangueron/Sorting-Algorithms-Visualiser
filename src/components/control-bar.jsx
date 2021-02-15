import React , { useEffect }from 'react';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';
// import NavigationIcon from '@material-ui/icons/Navigation';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import AppBar from '@material-ui/core/AppBar';
import InputLabel from '@material-ui/core/InputLabel';



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

    const updateCurrentAlgo = (value) => {
        // props.setData({...data, sortSpeed:value})
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
                    <option value="mergeSort">Merge sort</option>
                    <option value="quickSort">Quick sort</option>
                    <option value="bubbleSort">Bubble sort</option>
                    </NativeSelect>
                    {/* <FormHelperText>Pick an algorithem</FormHelperText> */}
                </FormControl>
                
                <Button variant="contained" style={{background:"white", marginLeft:"1vw", fontSize:"20px", fontWeight:'bold'}}> Sort! </Button>

            </div>

       </div>
       </AppBar>
    )
}
        
export default ControlBar;
