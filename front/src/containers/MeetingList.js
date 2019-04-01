import { connect } from 'react-redux'
import { MeetingList } from '../components/molecules/MeetingList'
import { delete_action } from '../store/meeting/actions'

const mapStateToProps = (state) => {
  return {
    token : state.meeting.token,
    meeting_list : state.meeting.meeting_list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete : (id) => { dispatch(delete_action(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
