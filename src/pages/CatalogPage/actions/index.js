import { createAction } from 'redux-actions';

export const GET_POKEMON_REQUEST = createAction('GET_POKEMON_REQUEST');
export const GET_POKEMON_SUCCESS = createAction('GET_POKEMON_SUCCESS');
export const GET_POKEMON_FAIL = createAction('GET_POKEMON_FAIL');

export const HANDLE_BUY_POKEMON = createAction('HANDLE_BUY_POKEMON');
export const HANDLE_INCREMENT = createAction('HANDLE_INCREMENT');
export const HANDLE_DECREMENT = createAction('HANDLE_DECREMENT');
export const HANDLE_REMOVE = createAction('HANDLE_REMOVE');

export const HANDLE_CHANCHE_PAGE = createAction("HANDLE_CHANCHE_PAGE");