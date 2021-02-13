import React from 'react';

const MainBox = (props) => {
    

    return (
       <div style={{border:'solid 1px black', width:'90vw', height:'90vh', marginLeft: "5vw", 
       display: "grid", alignItems: "end", gridTemplateColumns: "repeat(20, 1fr)"}}>
            {props.numsArray.map( (n,i) => 
                <div key={`bar ${n} / ${i}`} 
                style={{backgroundColor:'#3498db', border:'1px solid black',
            margin:'0 10px', display:'inline-block', width:'10px', height:`${n*0.09}vh`,
            // position: 'relative',
             top:`calc(88vh - ${n*0.09}vh)` ,
             justifySelf: "center"
            }}> {n} </div>)
            }
       </div>
    )
}
        
export default MainBox;
