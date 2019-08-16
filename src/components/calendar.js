import React, { useState, useEffect } from "react"
import './calendar.css'

function Calendar(props) {
  // var [animation, setAnimation] = useState();
  //
  // useEffect(() => { animation = setTimeout(function () {
  //     setAnimation("animate");
  //   }, 1);
  //   }
  // )
  // var divStyle = {
  //   opacity: '0'
  // };

  if (props.calendar) {
    var title = "Kalender";
    var post = props.calendar.slice(0, 2).map((item, i) => {
    return (
      <a href={item.link} key={item.id}>
        <div  className="grid-item-k">
          <div className="date">{item.day}<span>{item.month}</span></div>
          <div className="event">{item.event}</div>
        </div>
      </a>
    )
    })
  }

  return (
    <>
    <div className="grid-item grid-item-c calender">
      <div className="grid-item-k grid-item-1">
        <h2>{title}</h2>
      </div>
      {post}
    </div>
    </>
  )
}
export default Calendar
