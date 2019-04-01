import { connect } from 'react-redux'
import { MeetingAdd } from '../components/molecules/MeetingAdd'
import { post_action } from '../store/meeting/actions'

const mapStateToProps = (state) => {
  return {
    token : state.meeting.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPost : (sinceWhen, tilWhen) => { dispatch(post_action(sinceWhen, tilWhen)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingAdd)
