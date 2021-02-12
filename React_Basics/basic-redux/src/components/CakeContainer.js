import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    console.log(props)
    return (
        <div>
            <h2>Number of Cakes( using connect) - { props.numOfCakes }  </h2>
            <button onClick={props.buyCake }>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)
