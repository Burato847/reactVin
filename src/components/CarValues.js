import React from 'react';
import '../css/FieldStyle.css';

class CarValues extends React.Component {
    render() {
        return this.props.data.map((car, index) => {
            const { brand, vin, country, productionDate } = car;
            return (
                <div className='filds-wrap' key={index}>
                    <div className='fild'>{brand}</div>
                    <div className='fild'>{vin}</div>
                    <div className='fild'>{country}</div>
                    <div className='fild'>{productionDate}</div>
                    <button  onClick={() => this.props.deleteCar(vin)}>Delete</button>
                </div>
            );
        })
    }
}


export default CarValues;