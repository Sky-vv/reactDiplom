import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
    isLoading: true,
    errors: null,
    data: null
}

const orderListReducer = handleActions({
    [actions.GET_ORDER_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.GET_ORDER_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        data: payload.response,
    }),
    [actions.GET_ORDER_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload
    }),
}, initialState)


export default orderListReducer;
