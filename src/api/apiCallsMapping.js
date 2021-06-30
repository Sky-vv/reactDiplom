import * as singUP from '../pages/RegistrationPage/actions';
import * as getRegistrationUser from '../pages/RegistrationPage/api';

import * as signInAPI from '../pages/HomePage/api';
import * as singInActions from '../pages/HomePage/actions';

import * as getPokemonAPI from '../pages/CatalogPage/api';
import * as getPokemonAction from '../pages/CatalogPage/actions';

import * as getPokemonDetailsAPI from '../pages/DetailsInfoPage/api';
import * as getPokemonDetailsAction from '../pages/DetailsInfoPage/actions';

import * as createOrderAPI from '../pages/BasketPage/api';
import * as createOrderAction from '../pages/BasketPage/actions';

import * as getOrderAPI from '../pages/ProfilePage/api';
import * as getOrderAction from '../pages/ProfilePage/actions';

const apiCallMaping = (action) => {
    const mapping = {
        [singUP.HANDLE_REGISTRATION_FORM_REQUEST]: getRegistrationUser.getRegistrationUser,
        [singInActions.SIGN_IN_REQUEST]: signInAPI.signIn,
        [getPokemonAction.GET_POKEMON_REQUEST]: getPokemonAPI.getPokemon,
        [getPokemonDetailsAction.GET_POKEMON_DETAILS_REQUEST]: getPokemonDetailsAPI.getPokemonDetails,
        [createOrderAction.BUY_POKEMON_REQUEST]: createOrderAPI.createOrder,
        [getOrderAction.GET_ORDER_REQUEST]: getOrderAPI.getOrder,
    };

    if (!mapping.hasOwnProperty(action.type)) {
        throw Error('Not mapped action');
    }

    return mapping[action.type];
}

export default apiCallMaping;