import React , { useEffect }from 'react';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import AppBar from '@material-ui/core/AppBar';
import InputLabel from '@material-ui/core/InputLabel';
import './styles/control-bar.css';
import bubbleSort from '../algo-helpers/bubbleSort'
import mergeSort from '../algo-helpers/mergeSort'
import quickSort from '../algo-helpers/quickSort'
import heapSort from '../algo-helpers/heapSort'


const ControlBar = (props) => {
    
    const algos = {bubbleSort:bubbleSort, mergeSort:mergeSort, quickSort:quickSort, heapSort:heapSort}

    const data = props.data

    /// Data setters:
    const setNumsArray = (newArray) => { props.setData({...data, numsArray: newArray}) }
    const setIsRunning = (state) => { props.setData({...data, isRunning: state}) }
    const diableControlButtons = (state) => { setIsRunning(state) }     //clear naming
    const updateBarAmount = (value) => { props.setData({...data, barAmount:value, sortSpeed:convertBarAmountToSpeed(value)}) }
    const updateSortingSpeed = (value) => { props.setData({...data, sortSpeed:value}) }
    const updateCurrentAlgo = (value) => { props.setData({...data, currentAlgo:value}) }


    /// Helpers:
    const getRandomNum =  (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }
    const generateNewBars = () => { createRandomNumsArray(data.barAmount, data.minBarSize, data.maxBarSize) }
    const createRandomNumsArray = (numsAmmount, minNumsRange, maxNumsRange) => {
        let newNums = [] 
        for(let i=0; i<numsAmmount; i++){
            let newNum = getRandomNum(minNumsRange,maxNumsRange)
            newNums.push(newNum)
        }
        setNumsArray([...newNums])
    }

    const convertBarAmountToSpeed = (barAmount) => {            //UX design 
        return barAmount>80 ? 10 : barAmount>60 ? 15 : barAmount>60 ? 20 : barAmount>40 ? 30 : barAmount>20 ? 50 : barAmount>5 ? 100 : 500 
    }

    useEffect(generateNewBars, [data.barAmount])

    const sort = () => {
        const sortBtn = document.getElementById("sortBtn")
        sortBtn.textContent = "Reset"
        diableControlButtons(true)
        const { sortedArr, animations } = algos[data.currentAlgo]([...data.numsArray])   //retrive animations and sorted bars array
        for( let i=0; i<animations.length; i++){
            const bars = document.getElementsByClassName("bar")
            const barsInnerText = document.getElementsByClassName("bar-size")
            const barsColor = i%3===0 ? "yellow" : "#3498db"            //mark with yellow | unmark back to bars blue
            const bar1 = animations[i][0]
            const bar2 = animations[i][1]
            if(i%3!==2){        // mark/unmarks bars
                const bar1Style = bars[bar1].style
                const bar2Style = bars[bar2].style
                setTimeout( () => {
                    bar1Style.backgroundColor = barsColor
                    bar2Style.backgroundColor = barsColor
                },i*data.sortSpeed)
            } else {
                if(data.currentAlgo==="mergeSort"){
                    const barIndex = animations[i][0]
                    const newBarVal = animations[i][1]
                    setTimeout( () => {     
                        bars[barIndex].style.height = `${newBarVal*0.089}vh`
                        if(data.barAmount<=20){     //num visable - updatding values
                            barsInnerText[barIndex].textContent = newBarVal
                        }
                    },i*data.sortSpeed)
                }else {
                    // bubble / heap / quick :
                    const swapped = animations[i][2]
                    if(swapped){                //animation occuring only if true = value change occurd
                        const bar1Style = bars[bar1].style
                        const bar2Style = bars[bar2].style
                        setTimeout( () => {   
                            let temp = bar1Style.height             //swapping height animation
                            bar1Style.height = bar2Style.height
                            bar2Style.height = temp
                            if(data.barAmount<=20){     //num visable - updatding text values
                                let tempNum = barsInnerText[bar1].textContent
                                barsInnerText[bar1].textContent = barsInnerText[bar2].textContent
                                barsInnerText[bar2].textContent = tempNum
                            }
                        },i*data.sortSpeed)
                    }
                }
            }
        }
        setTimeout( () => {     //critical for updating tooltips
            sortBtn.textContent = "Sort!"
            diableControlButtons(false)
            setNumsArray(sortedArr)
        }, animations.length*data.sortSpeed)
    }

    const saveDataToSessionStorage = (keyToModifey,newVal) => { 
        if(keyToModifey){
            sessionStorage.setItem("sortingAlgosCachedData", JSON.stringify({...data, [keyToModifey]:newVal}));
        } else {
            sessionStorage.setItem("sortingAlgosCachedData", JSON.stringify(data));
        }
    } 

    // hacky soulution to stopping the amnimations due to the async setTimeouts in the call stack
    // saving the current state to session storage and refreshing the page
    const stopRun = () => {      
        saveDataToSessionStorage("isRunning",false)             
        window.location.reload(true);
    }

    return (
        <AppBar position="static">
       <div id="controlBar-container">
 
           <div id="controlBar-setters-left">
                
                <div id="speedSet-slider-container">
                    <Typography id="speedSet-slider" gutterBottom> Visualizer Speed: </Typography>
                    <Slider 
                    defaultValue={data.sortSpeed} step={5} min={5} max={100} style={{color:"black"}} aria-labelledby="speedSet-slider" 
                    value={1000/data.sortSpeed} disabled={data.isRunning ? true : null}
                    onChange={(event, value) => {
                        updateSortingSpeed((Math.floor(1000/value)))        //values conversions in order to make slider from slow 2 fast
                        saveDataToSessionStorage()
                    }}     
                    />
                </div>

                <div id="barAmount-slider-container">
                    <Typography id="barAmount-slider" gutterBottom> Bar Amount: </Typography>
                    <Slider 
                    defaultValue={data.barAmount} step={5} min={5} max={100} style={{color:"black"}}
                    aria-labelledby="barAmount-slider" valueLabelDisplay="auto" 
                    disabled={data.isRunning ? true : null}
                    onChange={(event, value) => {
                        updateBarAmount(value)
                        saveDataToSessionStorage()
                    }}
                    />
                </div>

                <Button 
                onClick={generateNewBars} disabled={data.isRunning ? true : null} variant="contained"
                style={{background:"white", fontSize:"16px", fontWeight:'bold', textTransform:"none", lineHeight:"1.3"}} > 
                Create New Bars 
                </Button>

           </div>

           <div id="controlBar-chooseSortAlgo-right">
                <FormControl>
                    <InputLabel shrink htmlFor="age-native-label-placeholder">Pick an algorithm</InputLabel>
                    <NativeSelect 
                    defaultValue={data.currentAlgo} disabled={data.isRunning ? true : null}
                    onChange={(event) => {
                        updateCurrentAlgo(event.target.value)
                        saveDataToSessionStorage()
                    }}>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="heapSort">Heap Sort</option>
                    <option value="mergeSort">Merge Sort</option>
                    <option value="quickSort">Quick Sort</option>
                    </NativeSelect>
                </FormControl>
                
                <Button 
                id="sortBtn" variant="contained" 
                style={{background:"white", marginLeft:"1vw", fontSize:"20px", fontWeight:'bold'}}
                onClick={data.isRunning ? stopRun : sort}>
                Sort! 
                </Button>

            </div>

       </div>
       </AppBar>
    )
}
        
export default ControlBar;
