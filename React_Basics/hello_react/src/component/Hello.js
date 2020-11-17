import React , { Component } from 'react';

function Hello(){

    // return ( 
    // <div className='dummyClass' id='dummyId'>
    //     <h1> Hello : Functional Component</h1>

    // </div>
    // );

    return React.createElement(
        'div',
        {
            id: 'dummyId',
            className: 'dummyClass'
        },
        React.createElement('h1',null,'Hello : Functional Component'));
}



export default Hello;