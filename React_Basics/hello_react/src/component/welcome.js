import React, { Component } from 'react';

// class Welcome extends Component {
//     render(){
//         return <h1> Welcome : Class Component</h1>
//     }
// }

class Welcome extends Component {
    render(){
    return <h1> Usage of probs in Class Component : {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome