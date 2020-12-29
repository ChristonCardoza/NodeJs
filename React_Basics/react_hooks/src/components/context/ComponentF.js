import React, { Component } from 'react'
import { ChannelContext, UserContext } from '../../App'

export class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        user => { return (
                          <ChannelContext.Consumer>
                             {
                                channel => {
                                 return <div> <h4>Class Context(ComponentF)</h4> User context value: {user}, channel context value: {channel}</div>
                                }
                             }
                          </ChannelContext.Consumer>  
                        )}
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentF
