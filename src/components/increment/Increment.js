import React, { Component } from 'react'; 

export default class Increment extends Component { 
    state = { value1: 0, value2: 0, } 

    handleIncrementClick1 = () => { 
       this.setState({ value1: this.state.value1 + 1 }) 
    }

    handleDecrementClick1 = () => { 
        this.setState({ value1: this.state.value1 - 1 }) 
    }

    handleIncrementClick2 = () => { 
        this.setState({ value2: this.state.value2 + 1 }) 
     }
 
     handleDecrementClick2 = () => { 
         this.setState({ value2: this.state.value2 - 1 }) 
     }
 
    render() { 
        return(
            <>
                <h2>Value1: {this.state.value1}</h2> 
                <button onClick={this.handleIncrementClick1}>Increment + </button>
                <button onClick={this.handleDecrementClick1}>Decrement - </button>
                <h2>Value2: {this.state.value2}</h2> 
                <button onClick={this.handleIncrementClick2}>Increment + </button>
                <button onClick={this.handleDecrementClick2}>Decrement - </button>
            </>
        )
    }
    
    
}