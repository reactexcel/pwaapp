import * as actions from "../actionTypes/actionTypes";
import { PostSuccess, PostError } from "../actions/actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { BASE_URL } from "../../services/api";
import axios from "axios";

export function* addPost(action) {
  console.log(action, "callledd");
  try {
    let response = yield call(
      axios.post,
      `${BASE_URL}/upload-avatar`,
      action.payload
    );

    let data = response.data;

    if (data) {
      yield put(PostSuccess({ response: data }));
    } else {
      yield put(PostError({ error: true }));
    }
  } catch (error) {
    yield put(PostError({ error: error }));
  }
}

export function* addPostsSaga() {
  yield takeLatest(actions.POST_REQUEST, addPost);
}
