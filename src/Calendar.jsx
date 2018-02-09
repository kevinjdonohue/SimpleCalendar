import React from 'react';

import './Calendar.css';

const Calendar = () => (
  <div className="calendar">
    <div className="calendar__header--odd">Sunday</div>
    <div className="calendar__header">Monday</div>
    <div className="calendar__header--odd">Tuesday</div>
    <div className="calendar__header">Wednesday</div>
    <div className="calendar__header--odd">Thursday</div>
    <div className="calendar__header">Friday</div>
    <div className="calendar__header--odd">Saturday</div>

    <div className="calendar__header--odd">1</div>
    <div className="calendar__header">2</div>
    <div className="calendar__header--odd">3</div>
    <div className="calendar__header">4</div>
    <div className="calendar__header--odd">5</div>
    <div className="calendar__header">6</div>
    <div className="calendar__header--odd">7</div>
  </div>
);

export default Calendar;
