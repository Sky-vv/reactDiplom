import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const initialState = {
    isLoading: true,
    message: null,
    errors: null,
};

const basketPageReducer = handleActions({
    [actions.BUY_POKEMON_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.BUY_POKEMON_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        message: payload.response
    }),
    [actions.BUY_POKEMON_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload.pesponse,
    })
}, initialState);

export default basketPageReducer;