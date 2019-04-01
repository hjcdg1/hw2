import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const Styledli = styled.span`
  display: inline-block;
  padding: 0.5rem 0.5rem;
  margin: 1rem 2rem;
  border: 2px solid cadetblue;
  border-radius: 7px;
  &:hover {
    background: azure;
  }
`

const add_style = {
  float : 'right'
}

export const MeetingAdd = ({ token, onPost }) => {
  // 로그인했을 때
  if (token !== null) {
    let sinceWhen, tilWhen
    return (
      <Styledli>
        <div>
          <font size="3.5">회의 시작 시각&ensp;</font>
          <input type="datetime-local" ref={node=>{sinceWhen=node;}}/>
          <br/>
          <font size="3.5">회의 종료 시각&ensp;</font>
          <input type="datetime-local" ref={node=>{tilWhen=node;}}/>
        </div>
        <br/>
        <Button type = "submit" style={add_style} onClick={() => onPost(sinceWhen.value, tilWhen.value)}>예약하기</Button>
      </Styledli>
    )
  }

  // 로그인하지 않았을 때
  else {
    return <div></div>
  }
}

MeetingAdd.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default MeetingAdd
