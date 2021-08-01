import React, { Component } from 'react'
import SmoothScroll from 'smooth-scroll'
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';

import "./Navbar.css"

export class Navbar extends Component {

    state = {
        ham: true,
        topnav: false
    }

    onTopnavHandler = () => {
        this.setState({ topnav: !this.state.topnav })
        this.setState({ ham: !this.state.ham })
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
                {
                    window.innerWidth<=768 ?
                        <div className="Navbar--Icon">
                            {
                                this.state.ham ?
                                    <Icon icon={menuIcon} onClick={()=>this.onTopnavHandler()}/> :
                                <Icon icon={closeIcon} onClick={()=>this.onTopnavHandler()}/>
                            }
                        </div> :
                    null
                }
                {
                    window.innerWidth>768 || this.state.topnav ?
                        <div className="Navbar--Links">
                            <a 
                                href="#today" 
                                className="Navbar--Link"
                            >
                                Today
                            </a>
                            <a 
                                href="#upcoming" 
                                className="Navbar--Link"
                            >
                                Upcoming
                            </a>
                            <a 
                                href="#completed" 
                                className="Navbar--Link"
                            >
                                Completed
                            </a>
                        </div> :
                    null
                }
            </div>
        )
    }
}

export default Navbar
