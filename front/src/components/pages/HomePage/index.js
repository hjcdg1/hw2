import React from 'react'
import Login from '../../../containers/Login'
import MeetingList from '../../../containers/MeetingList'
import MeetingAdd from '../../../containers/MeetingAdd'

const HomePage = () => {
  return (
    <div>
      <Login />
      <MeetingList />
      <MeetingAdd />
    </div>
  )
}

export default HomePage
