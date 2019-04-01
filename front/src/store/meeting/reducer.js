import { initialState } from "./selectors";

const login_reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS_ACTION': {
          localStorage.setItem("id", action.data.id);
          localStorage.setItem("token", new Buffer(`${action.data.id}:${action.data.password}`).toString('base64'));
          localStorage.setItem("meeting_list", JSON.stringify(action.data.meeting_list));
          return {
            id : action.data.id,
            password : action.data.password,
            token : new Buffer(`${action.data.id}:${action.data.password}`).toString('base64'),
            meeting_list: JSON.stringify(action.data.meeting_list),
            isAuthenticated : true,
            errors : state.errors
          }
        }

        case 'LOGIN_FAILURE_ACTION': {
          return {
            id : null,
            password : null,
            token : null,
            meeting_list : null,
            isAuthenticated : false,
            errors : action.message
          }
        }

        case 'LOGOUT_ACTION': {
          localStorage.removeItem("id");
          localStorage.removeItem("token");
          localStorage.removeItem("meeting_list");
          return {
            id : null,
            password : null,
            token : null,
            meeting_list : null,
            isAuthenticated : false,
            errors : null
          }
        }

        case 'DELETE_SUCCESS_ACTION': {
          let meetings = JSON.parse(state.meeting_list)
          let new_meetings = meetings.filter(meeting => meeting.id !== action.id)
          localStorage.setItem("meeting_list", JSON.stringify(new_meetings));
          return {
              ...state,
              meeting_list : JSON.stringify(new_meetings)
          }
        }

        case 'POST_SUCCESS_ACTION': {
          let meetings = JSON.parse(state.meeting_list)
          let new_meetings = meetings.concat(action.new_meeting)
          localStorage.setItem("meeting_list", JSON.stringify(new_meetings));
          return {
              ...state,
              meeting_list : JSON.stringify(new_meetings)
          }
        }

        default:
          return state
    }
}

export default login_reducer
