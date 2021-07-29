import React, { Component } from 'react'
import SmoothScroll from 'smooth-scroll'

import "./Navbar.css"

export class Navbar extends Component {

    state = {
        active: "today"
    }
    
    onActiveHandler = (link) => {
        this.setState({ active: link });
    }

    render() {
        const scroll = new SmoothScroll('.Navbar a[href*="#', {
            speed: 900,
            offset: function (anchor, toggle) {
                return 140;
            },
        });
        return (
            <div className="Navbar">
                <div className="Navbar--Links">
                <a 
                        href="#today" 
                        className="Navbar--Link"
                        onClick={()=>this.onActiveHandler("today")}
                    >
                        Today
                    </a>
                    <a 
                        href="#upcoming" 
                        className="Navbar--Link"
                        onClick={()=>this.onActiveHandler("upcoming")}
                    >
                        Upcoming
                    </a>
                    <a 
                        href="#completed" 
                        className="Navbar--Link"
                        onClick={()=>this.onActiveHandler("completed")}
                    >
                        Completed
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar
