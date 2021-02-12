import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


function MultipleCakeContainer(props) {
    console.log(props)
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes( using connect) - { props.numOfCakes }  </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number) }>Buy {number} Cake</button>
        </div>
    )
}

// Takes the redux state
const mapStateToProps = state => {
    return {
        // numOfCakes: state.numOfCakes
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultipleCakeContainer)
