import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const initialBasket = {
    pokemons: [],
};

const basketPokemonReducer = handleActions({
    [actions.HANDLE_BUY_POKEMON]: (state, { payload }) => {
        const stateCopy = { ...state };
        const pokemonID = payload.id;
        const pokemonData = payload.pokemon;
        let positionIdInArray;

        for (let i = 0; i < pokemonData.length; i++) {
            if (pokemonID === pokemonData[i].id) {
                positionIdInArray = i
            }
        }

        const basket = stateCopy.pokemons.find((item) => item.id === pokemonID)

        if (!basket) {
            stateCopy.pokemons.push({
                id: pokemonData[positionIdInArray].id,
                image: pokemonData[positionIdInArray].image,
                name: pokemonData[positionIdInArray].name,
                price: pokemonData[positionIdInArray].price,
                quantity: 1,
            })
        } else {
            for (let i = 0; i < stateCopy.pokemons.length; i++) {
                if (stateCopy.pokemons[i].id === pokemonID) {
                    stateCopy.pokemons[i].quantity = stateCopy.pokemons[i].quantity + 1;
                }
            }
        }
        return stateCopy
    },
    [actions.HANDLE_INCREMENT]: (state, { payload }) => {
        const stateCopy = { ...state }
        stateCopy.pokemons[payload].quantity = stateCopy.pokemons[payload].quantity + 1;
        return stateCopy
    },
    [actions.HANDLE_DECREMENT]: (state, { payload }) => {
        const stateCopy = { ...state }
        if (stateCopy.pokemons[payload].quantity === 1) {
            stateCopy.pokemons.splice(payload, 1)
        } else {
            stateCopy.pokemons[payload].quantity = stateCopy.pokemons[payload].quantity - 1;
        }
        return stateCopy
    },
    [actions.HANDLE_REMOVE]: () => {
        return initialBasket;
    }
}, initialBasket)

export default basketPokemonReducer;