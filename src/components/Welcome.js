import React, { Component } from 'react'

class Welcome extends Component{
    render()
    {
        return <h1>Welcome {this.props.name},  {this.props.hobby} domain</h1>
    }
}

//props are immutable, we cannot assign name to it nor can change

export default Welcome;