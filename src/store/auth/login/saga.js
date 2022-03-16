import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "./actionTypes";

 function* getUsersApi() {
  const apiData = yield fetch("http://localhost:6767/getdata")
    .then((response) => response.json())
  return apiData;
}

function* getUsersData() {
  const userApi = yield call(getUsersApi);
  console.log(userApi);
  yield put({ type: type.GET_USERS_SUCCESS, userApi });
}
function* AuthSaga() {
  yield takeEvery(type.GET_USERS, getUsersData);
}

export default AuthSaga;
