// Write your code here

import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [
      {
        id: uuidv4(),
        title: 'Dentist',
        date: '20 July 2021, Tuesday',
        isStarred: false,
      },
    ],
  }
  render() {
    const {appointmentsList} = this.state
    return (
      <div>
        <div>
          <div>
            <div>
              <form>
                <h1> Add Appointment </h1>
                <label htmlFor="title"> TITLE </label>
                <input id="title" input="text" />
                <label htmlFor="date"> DATE </label>
                <input id="date" type="date" />
                <button type="submit"> Add </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
            <hr />
            <div>
              <h1> Appointments </h1>
              <button type="button"> Starred </button>
            </div>
            <ul>
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
