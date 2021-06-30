import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
    isLoading: true,
    errors: null,
    data: null
}

const marketReducer = handleActions({
    [actions.GET_POKEMON_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.GET_POKEMON_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        data: payload.response,
    }),
    [actions.GET_POKEMON_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload
    }),
}, initialState)

export default marketReducer;



