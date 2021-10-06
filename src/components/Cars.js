import React from 'react';
import '../css/FieldStyle.css';
import CarValues from './CarValues';

class Cars extends React.Component{
    render(){
        const cars = this.props.cars;
        const filter = this.props.filter;
        //console.log('1111', filter);
        const filteredCars = cars.filter(car => 
            car[filter.fildName].toUpperCase() === filter.fildValue.toUpperCase());
        return(
            <CarValues 
                data={(filteredCars.length !== 0 || filter.fildValue !== '') ? filteredCars : cars}
                deleteCar={this.props.deleteCar}
            />
        );
    }
}

export default Cars;