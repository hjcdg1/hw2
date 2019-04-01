import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Meeting from '../../atoms/Meeting'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const MeetingList = ({ token, meeting_list, onDelete }) => {
  // 로그인했을 때
  if (token !== null) {
    let meetings = JSON.parse(meeting_list)
    return (
      <div>
        {meetings.map(meeting =>
          <div key = {meeting.id} >
            <Meeting {...meeting} onDelete={() => onDelete(meeting.id)}/>
            <br/>
          </div>
        )}
      </div>
    )
  }

  // 로그인하지 않았을 때
  else {
    return <div></div>
  }
}

MeetingList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default MeetingList
