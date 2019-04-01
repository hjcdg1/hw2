export const LOGIN_ACTION = 'LOGIN_ACTION'
export const LOGIN_SUCCESS_ACTION = 'LOGIN_SUCCESS_ACTION'
export const LOGIN_FAILURE_ACTION = 'LOGIN_FAILURE_ACTION'
export const LOGOUT_ACTION = 'LOGOUT_ACTION'
export const DELETE_ACTION = 'DELETE_ACTION'
export const DELETE_SUCCESS_ACTION = 'DELETE_SUCCESS_ACTION'
export const POST_ACTION = 'POST_ACTION'
export const POST_SUCCESS_ACTION = 'POST_SUCCESS_ACTION'

export const login_action = (id, password) => {
    return {
        type : LOGIN_ACTION,
        id : id,
        password : password
    }
};

export const logout_action = () => {
    return {
        type : LOGOUT_ACTION
    }
};

export const login_success_action = (id, password, meeting_list) => {
    return {
        type : LOGIN_SUCCESS_ACTION,
        data : {
            id : id,
            password : password,
            meeting_list : meeting_list
        }
    }
};

export const login_faliure_action = () => {
    return {
        type : LOGIN_FAILURE_ACTION,
        message : "Invaild ID or Password"
    }
};

export const delete_action = (id) => {
    return {
        type : DELETE_ACTION,
        id : id
    }
};

export const delete_success_action = (id) => {
    return {
        type : DELETE_SUCCESS_ACTION,
        id : id
    }
};

export const post_action = (sinceWhen, tilWhen) => {
    return {
        type : POST_ACTION,
        sinceWhen : sinceWhen,
        tilWhen : tilWhen
    }
};

export const post_success_action = (new_meeting) => {
    return {
        type : POST_SUCCESS_ACTION,
        new_meeting : new_meeting
    }
};
