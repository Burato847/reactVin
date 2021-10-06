import React from "react";
import '../css/FieldStyle.css';

class AddCar extends React.Component{

    brandRef = React.createRef();
    vinRef = React.createRef();
    countryRef = React.createRef();
    productionDateRef = React.createRef();

    addCars = (event) =>{
        event.preventDefault();
        const car = {
            brand: this.brandRef.current.value,
            vin: this.vinRef.current.value,
            country: this.countryRef.current.value,
            productionDate: this.productionDateRef.current.value
        };
        this.props.addCarToList(car);
        event.currentTarget.reset();
    };

    render(){
        return(
            <form className='Add-car' onSubmit={this.addCars}> 
                <div className='filds-wrap'>
                    {/* <div className='fild'> */}
                        <input ref={this.brandRef} name='brand' type='text'/>
                    {/* </div> */}
                    {/* <div className='fild'> */}
                        <input ref={this.vinRef} name='vin' type='text'/>
                    {/* </div> */}
                    {/* <div className='fild'> */}
                        <input ref={this.countryRef} name='country' type='text'/>
                    {/* </div> */}
                    {/* <div className='fild'> */}
                        <input ref={this.productionDateRef} name='productionDate' type='text'/>
                    {/* </div> */}
                    <button type='submit'>+ Add to List</button>
                </div>
            </form>
        );
    }
}

export default AddCar;