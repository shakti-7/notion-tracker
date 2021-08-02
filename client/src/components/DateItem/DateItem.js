import React, { Component } from 'react'

import "./DateItem.css"

class DateItem extends Component {
    render() {

        let dateitem = this.props.date
        let { bgcolor, tagbgcolor } = this.props
        let { title, date, description, tags } = dateitem
        let idx=0
        
        let datearray = []

        datearray=date.split('-').reverse()
        let correctdate = datearray[0]+'-'+datearray[1]+'-'+datearray[2]

        return (
            <div className="DateItem" style={{ backgroundColor: bgcolor }}>
                <div className="DateItem--Head">
                    <div className="DateItem--Title">{title}</div>
                    <div className="DateItem--Date">{correctdate}</div>
                </div>
                <div className="DateItem--Description">{description}</div>
                <div className="DateItem--Tags">
                    {
                        tags.split(", ").map(tag => (
                            <div key={idx++} className="DateItem--Tag" style={{ backgroundColor: tagbgcolor }}>{tag}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default DateItem
