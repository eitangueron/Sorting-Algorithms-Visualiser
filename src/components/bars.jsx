import React from 'react';

const Bars = (props) => {
    

    return (
       <div style={{border:'solid 1px black', width:'100vw', height:'90vh',}}>
            {props.numsArray.map( (n,i) => 
                <div key={`bar ${n} / ${i}`} 
                style={{backgroundColor:'#3498db', border:'1px solid black',
            margin:'10px', display:'inline-block', width:'10px', height:`${n*0.09}vh`,
            position: 'relative', top:`calc(88vh - ${n*0.09}vh)` }}> {n} </div>)
            }
       </div>
    )
}
        
export default Bars;
