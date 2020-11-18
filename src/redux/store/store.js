import { createStore, applyMiddleware } from "redux";
import watchAllSaga from "../saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAllSaga);

export default store;

// const handleChange = (e, values) => {
//     let file_size = e.target.files[0].size;
//     if (file_size < 1000000) {
//         file_size = Math.floor(file_size / 1000) + 'kb';
//     } else {
//         file_size = Math.floor(file_size / 1000000) + 'mb';
//     }
//     if (file_size <= '55kb') {
//         const image = e.target.files[0];
//         let form_data = new FormData();
//         form_data.append('name', image.name);
//         form_data.append('image', image);
//         dispatch(updateImageRequest({ form_data: form_data, id: profileData?.id }))
//     }
// }