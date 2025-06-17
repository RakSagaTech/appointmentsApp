// Write your code here

import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [
    ],
  }
  render() {
    const {appointmentsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="appointments-container">
            <div className="add-appointment-container">
              <form className="form">
                <h1 className="heading"> Add Appointment </h1>
                <label htmlFor="title" className="label">
                  {' '}
                  TITLE{' '}
                </label>
                <input
                  id="title"
                  input="text"
                  className="input"
                  placeholder="Title"
                />
                <label htmlFor="date" className="label">
                  {' '}
                  DATE{' '}
                </label>
                <input id="date" type="date" className="input" />
                <button type="submit" className="add-button">
                  {' '}
                  Add{' '}
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-img"
              />
            </div>
            <hr className="line" />
            <div className="header-with-filter-container">
              <h1 className="appointments-heading"> Appointments </h1>
              <button type="button"> Starred </button>
            </div>
            <ul className="appointments-list">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  appointmentDetails={eachAppointment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
