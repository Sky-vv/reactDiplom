import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
    isLoading: false,
    isAuth: false,
    errors: null,
    token: null,
    userName: null,
};

const authReducers = handleActions({
    [actions.SIGN_IN_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.SIGN_IN_SUCCESS]: (state, { payload }) => (
        {
            ...state,
            isLoading: false,
            isAuth: true,
            token: payload.response.accessToken,
            userName: payload.response.firstName,
            id: payload.response._id

        }),
    [actions.SIGN_IN_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload.response,
    })
}, initialState)

export default authReducers;