import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';
import watcherRequest from '../helpers/requests/watcherRequest';
import launchSaga from '../helpers/requests/launchSaga';
import loginWather from '../helpers/sagas/loginWatcher';

function* rootSaga() {
    yield all([launchSaga(), watcherRequest(), loginWather()]);
}

export default rootSaga;