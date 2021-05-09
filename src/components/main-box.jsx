import React from 'react';
import './styles/main-box.css'
import Tooltip from '@material-ui/core/Tooltip';

const MainBox = (props) => {
    
    const data = props.data
    
    return (
       <div id="main-box" style={{
       gridTemplateColumns: `repeat(${data.barAmount}, 1fr)`
        }}>
            {data.numsArray.map( (num,k) => 
                <Tooltip title={num} key={`bar-tooltip ${num} / ${k}`}>
                <div className="bar" key={`bar ${num} / ${k}`} 
                    style={{
                    width:`calc(95vh / (${data.barAmount}))`, 
                    height:`${num*0.089}vh`,
                    top:`calc(88vh - ${num*0.089}vh)`,
                }}>
                {data.barAmount <=30 ?
                    <span className="bar-size">{num}</span> : null}
                </div>
                </Tooltip>)
            }
       </div>
    )
}
        
export default MainBox;
