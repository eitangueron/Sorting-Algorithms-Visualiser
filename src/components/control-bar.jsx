import React from 'react';
import Button from '@material-ui/core/Button';

const ControlBar = (props) => {
    
    const ammountOfBars = 10
    const minRange = 5
    const maxRange = 1000

    const generateNewBars = () => {
        props.createRandomNumsArray(ammountOfBars, minRange, maxRange)
    }

    return (
       <div style={{border:'black 2px solid', height:'10vh', width:'100vw',display:'grid', gridTemplateColumns:'repeat(3,1fr)', alignItems: 'center', justifyItems: 'center'}}>
            <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}} onClick={() => generateNewBars()}> Create New Array </Button>
            <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}}> Sort! </Button>
            <div>
                <Button variant="contained" style={{backgroundColor:'#3498db', width:'250px', height:'5vh'}}> Merge Algo! </Button>
            </div>
       </div>
    )
}
        
export default ControlBar;
