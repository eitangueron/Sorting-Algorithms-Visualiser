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
    const setNumsArray = (newArray) => {
        props.setData({...data, numsArray: newArray})
    }

    const setIsRunning = (state) => { props.setData({...data, isRunning: state}) }
    const diableControlButtons = (state) => { setIsRunning(state) }

    const updateBarAmount = (value) => { props.setData({...data, barAmount:value, sortSpeed:convertBarAmountToSpeed(value)}) }

    const updateSortingSpeed = (value) => { props.setData({...data, sortSpeed:value}) }

    const updateCurrentAlgo = (value) => { props.setData({...data, currentAlgo:value}) }


    /// Helpers:
    const generateNewBars = () => {
        createRandomNumsArray(data.barAmount, data.minBarSize, data.maxBarSize)
    }
    
    const createRandomNumsArray = (numsAmmount, minNumsRange, maxNumsRange) => {
        let newNums = [] 
        for(let i=0; i<numsAmmount; i++){
            let newNum = getRandomNum(minNumsRange,maxNumsRange)
            newNums.push(newNum)
        }
        setNumsArray([...newNums])
    }

    const getRandomNum =  (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const convertBarAmountToSpeed = (barAmount) => {            //TO DO: CREATE A FUNCTION ?
        return barAmount>80 ? 10 : barAmount>60 ? 15 : barAmount>60 ? 20 : barAmount>40 ? 30 : barAmount>20 ? 50 : barAmount>5 ? 100 : 500
    }
    

    useEffect(generateNewBars, [data.barAmount])


    const sort = () => {
        // sortBtnRef.current.disabled = true; 
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
                        if(data.barAmount<=30){     //num visable - updatding values
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
                            if(data.barAmount<=30){     //num visable - updatding text values
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
            diableControlButtons(false)
            setNumsArray(sortedArr)
        }, animations.length*data.sortSpeed)
    }

    const marks = [{ value: 10, label: 'Fast'} , { value: 200, label: 'Slow'}]
    
    return (
        <AppBar position="static">
       <div id="controlBar-container">
 
           <div id="controlBar-setters-left">
                
                <div id="speedSet-slider-container">
                    <Typography id="speedSet-slider" gutterBottom> Visulaizer Speed: </Typography>
                    <Slider defaultValue={30} step={20} min={10} max={200} style={{color:"black"}}
                    aria-labelledby="speedSet-slider" 
                    disabled={data.isRunning ? true : null}
                    onChangeCommitted={(event, value) => updateSortingSpeed(value)}
                    value={data.sortSpeed}
                    // scale={(x) => x ** 10}
                    // marks={marks}
                    // track="inverted"
                    />
                </div>

                <div id="barAmount-slider-container">
                    <Typography id="barAmount-slider" gutterBottom> Bar Amount: </Typography>
                    <Slider defaultValue={20} step={5} min={5} max={100} style={{color:"black"}}
                        aria-labelledby="barAmount-slider" valueLabelDisplay="auto"     // marks 
                        disabled={data.isRunning ? true : null}
                        onChange={(event, value) => updateBarAmount(value)}
                        />
                </div>

                <Button onClick={generateNewBars} disabled={data.isRunning ? true : null} variant="contained"
                style={{background:"white", fontSize:"16px", fontWeight:'bold', textTransform:"none", lineHeight:"1.3"}} 
                > Create New Bars 
                </Button>

           </div>

           <div id="controlBar-chooseSortAlgo-right">
                <FormControl>
                    <InputLabel shrink htmlFor="age-native-label-placeholder">Pick an algorithem</InputLabel>
                    <NativeSelect 
                    disabled={data.isRunning ? true : null}
                    onChange={(event) => updateCurrentAlgo(event.target.value)}>
                    <option value="bubbleSort">Bubble sort</option>
                    <option value="heapSort">Heap sort</option>
                    <option value="mergeSort">Merge sort</option>
                    <option value="quickSort">Quick sort</option>
                    </NativeSelect>
                </FormControl>
                
                <Button  onClick={sort} disabled={data.isRunning ? true : null} variant="contained"
                style={{background:"white", marginLeft:"1vw", fontSize:"20px", fontWeight:'bold'}}
                > Sort! 
                </Button>

            </div>

       </div>
       </AppBar>
    )
}
        
export default ControlBar;
