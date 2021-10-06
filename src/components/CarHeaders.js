import React from 'react';
import '../css/FieldStyle.css';

class CarHeaders extends React.Component{
    render(){
        return(
            <div className='filds-wrap'>
                <div className='fild'>Brand</div>
                <div className='fild'>Vin code</div>
                <div className='fild'>Country of construction</div>
                <div className='fild'>Date of construction</div>
                <div style={{width: 82}}></div>
            </div>
        );
    }
}

export default CarHeaders;