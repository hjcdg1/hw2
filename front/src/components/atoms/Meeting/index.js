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

const delete_style = {
  float : 'right'
}

const Meeting = ({ id, created, sinceWhen, tilWhen, user, onDelete }) => (
  <Styledli>
    <br/>
    &ensp;1. 예약 번호 : {id}<br/>
    &ensp;2. 예약자 : {user}<br/>
    &ensp;3. 회의 일시 : {sinceWhen} ~ {tilWhen}<br/>
    &ensp;4. 예약 날짜 : {created}<br/>
    <br/>
    <Button type = "submit" style={delete_style} onClick={() => onDelete()}>예약 삭제</Button>
  </Styledli>
)

Meeting.propTypes = {
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  sinceWhen: PropTypes.string.isRequired,
  tilWhen: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}

export default Meeting
