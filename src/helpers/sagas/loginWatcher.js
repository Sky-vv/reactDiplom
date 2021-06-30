import { takeEvery } from 'redux-saga/effects';
import { SIGN_IN_SUCCESS } from '../../pages/HomePage/actions';
import launchSaga from '../requests/launchSaga';

function* loginWather() {
    yield takeEvery(SIGN_IN_SUCCESS, launchSaga);
}

export default loginWather;