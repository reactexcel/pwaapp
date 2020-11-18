import { fork, all } from "redux-saga/effects";
import { addPostsSaga } from "./addPostSaga";
import { listPostsSaga } from "./listPostSaga";

function* watchAllSaga() {
  {
    yield all([fork(addPostsSaga), fork(listPostsSaga)]);
  }
}

export default watchAllSaga;
