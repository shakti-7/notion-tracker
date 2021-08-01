import React, { Component } from 'react'
import { Icon } from '@iconify/react';

import chevronDown from '@iconify/icons-mdi/chevron-down';
import chevronRight from '@iconify/icons-mdi/chevron-right';
import spinner from "../../images/spinner.gif"

import DateItem from "../DateItem/DateItem"
import Navbar from "../Navbar/Navbar"

import "./Layout.css"

class Layout extends Component {

    state = {
        today: true,
        upcoming: true,
        completed: true,
        loading: true,
        dates: [],
        todayDates: [],
        upcomingDates: [],
        completedDates: []
    }

    onToggleToday = () => {
        this.setState({ today: !this.state.today })
    }

    onToggleUpcoming = () => {
        this.setState({ upcoming: !this.state.upcoming })
    }

    onToggleCompleted = () => {
        this.setState({ completed: !this.state.completed })
    }

    componentDidMount = async() => {

        this.setState({ loading: true })
        await fetch('http://localhost:5000/dates')
        .then( data => data.json() )
        .then( data => this.setState({ dates: data }))

        let todayDate = new Date()
        let todayDay = todayDate.getDate()
        let todayMonth = todayDate.getMonth()+1
        let todayYear = todayDate.getFullYear()

        let today = []
        let upcoming = []
        let completed = []

        this.state.dates.forEach(date => {
            let dateSplit = date.date.split('-')
            let dateArray = []
            dateSplit.forEach(dateitem => {
                dateArray.push(parseInt(dateitem))
            })
            if(dateArray[0]>todayYear || (dateArray[0]>=todayYear && dateArray[1]>todayMonth) || (dateArray[0]>=todayYear && dateArray[1]>=todayMonth && dateArray[2]>todayDay)){
                upcoming.push(date)
            }
            else if(dateArray[0]===todayYear && dateArray[1]===todayMonth && dateArray[2]===todayDay){
                today.push(date)
            }
            else{
                completed.push(date)
            }
        })

        this.setState({ todayDates: today, upcomingDates: upcoming, completedDates: completed, loading: false })
    }

    render() {

        let index=0
        let bgcolors=["#7395AE", "#B1A296"]
        let tagbgcolors=["#557A95", "#5D5C61"]

        return (
            <div className="Layout">
                <Navbar />
                {
                    this.state.loading ?
                        <div className="Layout--LoadingContainer">
                            <img className="Layout--Loading" src={spinner} alt="loading..." />
                        </div> :
                    <div className="Layout--Body">
                        <div className="Layout--Container" id="today">
                            <div className="LayoutTitle">
                                <Icon icon={this.state.today ? chevronDown : chevronRight} className="LayoutTitle--Button" onClick={()=>this.onToggleToday()} style={{ transform: "none" }}/>
                                <div className="LayoutTitle--Title">Today</div>
                                <div className="LayoutTitle--Hr"></div>
                            </div>
                            {
                                this.state.today ?
                                    this.state.todayDates.length>0 ?
                                        this.state.todayDates.map(date => (
                                            <DateItem key={index++} date={date} bgcolor={bgcolors[index%2]} tagbgcolor={tagbgcolors[index%2]} />
                                        )) :
                                    <div className="Layout--NothingDue">Chill Scenes! Nothing to do today yay!</div> :
                                null
                            }
                        </div>
                        <div className="Layout--Container" id="upcoming">
                            <div className="LayoutTitle">
                                <Icon icon={this.state.upcoming ? chevronDown : chevronRight} className="LayoutTitle--Button" onClick={()=>this.onToggleUpcoming()} style={{ transform: "none" }}/>
                                <div className="LayoutTitle--Title">Upcoming</div>
                                <div className="LayoutTitle--Hr"></div>
                            </div>
                            {
                                this.state.upcoming ?
                                    this.state.upcomingDates.length>0 ?
                                        this.state.upcomingDates.map(date => (
                                            <DateItem key={index++} date={date} bgcolor={bgcolors[index%2]} tagbgcolor={tagbgcolors[index%2]} />
                                        )) :
                                    <div className="Layout--NothingDue">Nothing upcoming!</div> :
                                null
                            }
                        </div>
                        <div className="Layout--Container" id="completed">
                            <div className="LayoutTitle">
                                <Icon icon={this.state.completed ? chevronDown : chevronRight} className="LayoutTitle--Button" onClick={()=>this.onToggleCompleted()} style={{ transform: "none" }}/>
                                <div className="LayoutTitle--Title">Completed</div>
                                <div className="LayoutTitle--Hr"></div>
                            </div>
                            {
                                this.state.completed ?
                                    this.state.completedDates ?
                                        this.state.completedDates.map(date => (
                                            <DateItem key={index++} date={date} bgcolor={bgcolors[index%2]} tagbgcolor={tagbgcolors[index%2]}/>
                                        )) :
                                    <div className="Layout--NothingDue">Nothing completed yet!</div> :
                                null
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Layout
