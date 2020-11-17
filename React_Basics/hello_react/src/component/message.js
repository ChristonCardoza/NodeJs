import React, { Component } from 'react';

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Usage of State in Class Component',
            count: 0,
            counter: 0
        }

        // this.incrementCountByFive = this.incrementCountByFive.bind(this)
    }

    changeMessage(){
        this.setState({
            message : 'Thank you for Subscribing'
        })
    }

    incrementCount(){
        this.setState({
             count : this.state.count + 1
        },() => {console.log('Callback Count Value', this.state.count)})
    }

    incrementCountByOne(){

    //     this.setState({
    //         counter : this.state.counter + 1
    //    },() => {console.log('Callback Count Value Increment by 5 ', this.state.counter)})

        this.setState((prevState,probs) => ({
            counter : prevState.counter + parseInt(probs.value)
        }),() => {console.log('Callback Count Value Increment by 5 ', this.state.counter)})

    }
    

    // incrementCountByFive(){
    //     this.incrementCountByOne()
    //     this.incrementCountByOne()
    //     this.incrementCountByOne()
    //     this.incrementCountByOne()
    //     this.incrementCountByOne()

    // }

    incrementCountByFive = () => {
        this.incrementCountByOne()
        this.incrementCountByOne()
        this.incrementCountByOne()
        this.incrementCountByOne()
        this.incrementCountByOne()

    }


    render(){
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick ={ () => this.changeMessage()}>Subscribe</button>
                <h1> Count : {this.state.count} </h1>
                <button onClick ={ () => this.incrementCount()}>Increment</button>
                <h1> Counter Increment by 5 : {this.state.counter} </h1>
                {/* <button onClick ={this.incrementCountByFive.bind(this)}>Increment</button> Use Binding in  Render Method */}
                {/* <button onClick ={ () => this.incrementCountByFive()}>Increment</button> Use of Arrow Function */}
                {/* <button onClick ={ this.incrementCountByFive}>Increment</button> Use Binding in Constructor*/}
                 <button onClick ={ this.incrementCountByFive}>Increment</button> 
                 {/* Class Propery as Arrow Function */}

            </div>
        );
    }
}

export default Message