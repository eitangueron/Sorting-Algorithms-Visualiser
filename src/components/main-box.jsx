import React from 'react';
import './styles/main-box.css'

const MainBox = (props) => {
    
    const data = props.data

    return (
       <div id="main-box" style={{
       gridTemplateColumns: `repeat(${data.barAmount}, 1fr)`
        }}>
            {data.numsArray.map( (num,k) => 
                <div className="bar" key={`bar ${num} / ${k}`} 
                    style={{
                    // margin:'0 5px', 
                    width:`calc(95vh / (${data.barAmount}))`, 
                    // width:`${50 - props.barAmount}px`, 
                    height:`${num*0.089}vh`,
                    top:`calc(88vh - ${num*0.089}vh)`
                }}>
                    <span className="bar-size">{num}</span> 
                </div>)
            }
       </div>
    )
}
        
export default MainBox;
