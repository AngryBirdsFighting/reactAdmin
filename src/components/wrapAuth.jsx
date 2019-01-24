import React, {Component} from 'react'

export default (WrappedComponent) => {
    class WrapAuth extends Component {
        constructor() {
            super();
        }
        render() {
            if(this.props.auth)
            return <WrappedComponent> {this.props.title}</WrappedComponent>
            else
            return null
        }
    }

    return WrapAuth
}