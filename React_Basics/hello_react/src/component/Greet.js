import React, { component } from 'react';

// function Greet(){
//     return <h1> Greet : Functional Component </h1>
// }

// const Greet = () => <h1> Greet : Functional Component </h1>

const Greet = (props) => {
    return(
        <div>
            <h1> Usage of probs in Function Component: {props.name} a.k.a {props.heroName} </h1>
            {props.children}
        </div>
    );
}

export default Greet;