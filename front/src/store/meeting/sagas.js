import {take, put, call, fork} from 'redux-saga/effects'
import * as actions from './actions'

export function* watchLogin() {
    while(true) {
        const action = yield take(actions.LOGIN_ACTION)
        yield call(login_function, action)
    }
}

export function* watchDelete(){
    while(true) {
        const action = yield take(actions.DELETE_ACTION)
        yield call(delete_function, action)
    }
}

export function* watchPost(){
    while(true) {
        const action = yield take(actions.POST_ACTION)
        yield call(post_function, action)
    }
}

export function* login_function(action) {
  let id = action.id
  let password = action.password
  const hash = new Buffer(`${id}:${password}`).toString('base64')
  const response = yield call(fetch, 'http://127.0.0.1:8000/meetings/',
    {
      method : 'GET',
      headers : { 'Authorization' : `Basic ${hash}` }
    }
  )

  // 로그인 성공
  if (response.ok) {
    alert('로그인 성공')
    const meeting_list = yield call([response, response.json])
    yield put(actions.login_success_action(id, password, meeting_list))
  }

  // 로그인 실패
  else {
    alert('로그인 실패')
    yield put(actions.login_faliure_action())
  }
}

export function* delete_function(action) {
    const response = yield call(fetch, "http://127.0.0.1:8000/meetings/" + action.id + "/",
      {
        method: 'DELETE',
        headers: { 'Authorization' : `Basic ${localStorage.getItem("token")}` }
      }
    );

    // 삭제 성공
    if(response.ok) {
        alert('삭제 성공')
        yield put(actions.delete_success_action(action.id))
    }

    // 삭제 실패
    else {
        alert('삭제 실패')
    }
}

export function* post_function(action) {
    let sinceWhen = action.sinceWhen
    let tilWhen = action.tilWhen
    const input_data = JSON.stringify({ sinceWhen: sinceWhen, tilWhen: tilWhen });
    const response = yield call(fetch, "http://127.0.0.1:8000/meetings/",
      {
        method: 'POST',
        headers: {
            'Authorization' : `Basic ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json',
        },
        body: input_data,
      }
    );
    console.log(response)
    // 예약 성공
    if(response.ok) {
        alert("예약 성공")
        const new_meeting = yield call([response, response.json]);
        yield put(actions.post_success_action(new_meeting))
    }

    // 예약 실패
    else {
        alert("예약 실패")
    }
}

export default function* () {
    yield fork(watchLogin)
    yield fork(watchDelete)
    yield fork(watchPost)
}
