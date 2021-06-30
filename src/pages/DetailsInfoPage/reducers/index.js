import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
    isLoading: true,
    errors: null,
    details: null,
}

const pokemonDetailsReducer = handleActions({
    [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        details: payload.response,
    }),
    [actions.GET_POKEMON_DETAILS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload.message
    })
}, initialState)

export default pokemonDetailsReducer;