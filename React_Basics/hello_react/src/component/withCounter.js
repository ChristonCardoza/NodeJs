import React from 'react'

const withCounter =( WrappedComponent,incrementBy) => {
    class withCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { count : prevState.count + incrementBy}
            })
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    { ... this.props}
                ></WrappedComponent>
            ) 
        }
    }
    return withCounter
}

export default withCounter 