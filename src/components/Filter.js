import React from 'react';
import '../css/FieldStyle.css';

class Filter extends React.Component{

    optionRef = React.createRef();
    inputRef = React.createRef();

    createFilter = (event) => {
        event.preventDefault();
        const filter = {
            fildName: this.optionRef.current.value,
            fildValue: this.inputRef.current.value
        };
        this.props.loadFilter(filter);
    };

    render(){
        return(
            <form className='filds-wrap' onSubmit={this.createFilter}>
                <select ref={this.optionRef} name='fildName' className='status'>
                    <option value='brand'>Brand</option>
                    <option value='vin'>Vin</option>
                    <option value='country'>Country</option>
                    <option value='productionDate'>Production Date</option>
                </select>
                <input ref={this.inputRef} name='fildValue' type='text' autoComplete='off'/> 
                <button type='submit'>Search</button>
            </form>
        );
    }
}

export default Filter;