import React, { Component } from 'react'; 

export default class Increment extends Component { 
    state = { value: 0 } 

    handleIncrementClick = () => { 
       this.setState({ value: this.state.value + 1 }) 
    }

    handleDecrementClick = () => { 
        this.setState({ value: this.state.value - 1 }) 
    }

    render() { 
        return(
            <>
                <h2>Value: {this.state.value}</h2> 
                <button onClick={this.handleIncrementClick}>Increment + </button>
                <button onClick={this.handleDecrementClick}>Decrement - </button>
            </>
        )
    }
    
    
}