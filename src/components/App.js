import React from 'react';
import sampleCars from '../sample-cars';
import Filter from './Filter';
import CarHeaders from './CarHeaders';
import Cars from './Cars';
import AddCar from './AddCar';

class App extends React.Component{

    state={
        cars:[],
        filter:{fildName: 'brand',
                fildValue: ''}
    };

    componentDidMount(){
        this.loadSampleCars();
    };

    loadSampleCars = () => {
        this.setState({cars: sampleCars});
    };

    loadFilter = (filter) => {
        this.setState({filter});
    };

    addCarToList = (car) => {
        const cars = this.state.cars;
        //console.log('222', cars);
        cars.push({...car});
        this.setState({cars});
    };

    deleteCar = (key) => {
        const cars = this.state.cars;
        // console.log('444', cars[key].vin);
        const deletedElementIndex = cars.findIndex(car => car.vin === key);
        delete cars[deletedElementIndex];
        // console.log('333', deletedElementIndex);
        // console.log('222', key);
        this.setState({cars: cars.filter(car => car !== null)});
    }

    render(){
        return(
            <div className='cars-list'>
                <div className='filter'>
                    <Filter 
                        filter={this.state.filter}
                        loadFilter={this.loadFilter}
                    /><br/>
                    <AddCar addCarToList={this.addCarToList}/>
                </div><br/>
                <div className='cars'>
                    <CarHeaders/>
                    <div className='cars'>
                        <Cars
                            filter={this.state.filter} 
                            cars={this.state.cars}
                            deleteCar={this.deleteCar}
                            loadSampleCars={this.loadSampleCars}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;