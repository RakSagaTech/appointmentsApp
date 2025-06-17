// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {id, title, date, isStarred} = appointmentDetails

  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li>
      <div>
        <h1> {title} </h1>
        <button type="button">
          <img src={starImageUrl} alt="star" />
        </button>
      </div>
      <p> {date} </p>
    </li>
  )
}

export default AppointmentItem
