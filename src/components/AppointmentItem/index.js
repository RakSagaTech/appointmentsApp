// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {id, title, date, isStarred} = appointmentDetails

  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointment-item">
      <div className="header-container">
        <h1 className="title"> {title} </h1>
        <button type="button" className="star-button">
          <img src={starImageUrl} alt="star" className="star"/>
        </button>
      </div>
      <p className="date"> {date} </p>
    </li>
  )
}

export default AppointmentItem
