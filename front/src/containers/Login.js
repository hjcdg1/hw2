import { connect } from 'react-redux'
import { Login } from '../components/molecules/Login'
import { login_action, logout_action } from '../store/meeting/actions'

const mapStateToProps = (state) => {
  console.log("현재 토큰 : " + state.meeting.token)
  console.log("현재 ID : " + state.meeting.id)
  return {
    state : state.meeting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin : (id, password) => { dispatch(login_action(id, password)) },
    onLogout : () => { dispatch(logout_action()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
