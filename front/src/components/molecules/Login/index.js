import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const logout_style = {
  float : 'right',
  padding : '20px'
}

export const Login = ({ state, onLogin, onLogout }) => {
  let id, password;

  // 로그인하지 않았을 때
  if (state.token == null) {
    return (
      <div style={{ padding : '20px' }}>
        <div>
          <h2>ID</h2>
          <input ref={node=>{id=node;}}/>
        </div>
        <div>
          <h2>Password</h2>
          <input ref={node=>{password=node;}}/>
        </div>
        <br/>
        <br/>
        <Button type = "submit" onClick={() => onLogin(id.value, password.value)}>Login</Button>
      </div>
    )
  }

  // 로그인했을 때
  else {
    return (
      <div>
        <font size="10">Nice to meet you, {state.id}!</font><br/>
        <div style={logout_style}><Button type = "submit" onClick={() => onLogout()}>Logout</Button></div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

Login.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Login
