export const initialState = {
  id : localStorage.getItem("id"),
  password : null,
  token : localStorage.getItem("token"),
  meeting_list : localStorage.getItem("meeting_list"),
  isAuthenticated : false,
  errors : {},
};
