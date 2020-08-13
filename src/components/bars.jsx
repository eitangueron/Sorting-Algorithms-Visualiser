import React from 'react';

const Bars = (props) => {
    

    return (
       <div style={{border:'solid 1px black', width:'100vw', height:'90vh',}}>
            {props.numsArray.map( n => 
                <div key={`bar ${n}`}> {n} </div>
                )}
       </div>
    )
}
        
export default Bars;
