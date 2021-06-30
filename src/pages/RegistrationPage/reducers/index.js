import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
    isLoading: true,
    errors: null,
    message: null
};

const registrationReducer = handleActions({
    [actions.HANDLE_REGISTRATION_FORM_REQUEST]: (state) => ({
        ...state,
        isLoading: true
    }),
    [actions.HANDLE_REGISTRATION_FORM_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        message: payload
    }),
    [actions.HANDLE_REGISTRATION_FORM_FAIL]: (state, { payload }) => ({
        ...state,
        error: payload.response
    })

}, initialState)

export default registrationReducer;