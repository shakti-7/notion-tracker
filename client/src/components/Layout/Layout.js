import React, { Component } from 'react'

import spinner from "../../images/spinner.gif";
import "./Layout.css"

class Layout extends Component {

    state = {
        upcoming: true,
        completed: false,
        loading: true,
        dates: []
    }

    componentDidMount = async() => {
        this.setState({ loading: true })
        await fetch('http://localhost:5000/dates')
        .then( data => data.json() )
        .then( data => this.setState({ dates: data }))
        this.setState({ loading: false })
    }

    render() {
        return (
            <div className="Layout">
                {
                    this.state.loading ?
                        <div className="Layout--Loading">
                            <img src={spinner} alt="loading..." />
                        </div> :
                    null
                }
                <div className="Layout--Container">
                    {
                        console.log(this.state.dates)
                    }
                </div>
            </div>
        )
    }
}

export default Layout
