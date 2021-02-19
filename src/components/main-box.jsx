import React from 'react';
import './styles/main-box.css'
import Tooltip from '@material-ui/core/Tooltip';

const MainBox = (props) => {
    
    const data = props.data

    // useEffect( () => {

    // },[data.sortingMotions])

    return (
       <div id="main-box" style={{
       gridTemplateColumns: `repeat(${data.barAmount}, 1fr)`
        }}>
            {data.numsArray.map( (numInfo,k) => 
                <Tooltip title={numInfo.num} key={`bar-tooltip ${numInfo.num} / ${k}`}>
                <div className="bar" key={`bar ${numInfo.num} / ${k}`} 
                    style={{
                    width:`calc(95vh / (${data.barAmount}))`, 
                    height:`${numInfo.num*0.089}vh`,
                    top:`calc(88vh - ${numInfo.num*0.089}vh)`,
                    backgroundColor: numInfo.selected? "purple" : numInfo.swapped? "green" : "#3498db"
                }}>
                {data.barAmount <=30 ? 
                    <span className="bar-size">{numInfo.num}</span> : null}
                </div>
                </Tooltip>)
            }
       </div>
    )
}
        
export default MainBox;
