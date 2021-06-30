import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions';
import * as action from '../../CatalogPage/actions'

import PokemonDetailsLayout from '../components/PokemonDetailsLayout'


const PokemonDetailsContainer = () => {
    const params = useParams()
    const dispatch = useDispatch();

    const pokemonDetails = useSelector(state => state.pokemonDetails);
    const basketPokemon = useSelector(state => state.basketPokemon.pokemons);

    const [basket, setBasket] = useState(basketPokemon.length);

    useEffect(() => {
        dispatch(actions.GET_POKEMON_DETAILS_REQUEST(params.id))
    }, []);

    const inBasket = () => {
        let boolean = false;
        basketPokemon.forEach(item => {
            if (item.id === pokemonDetails.details.id) {
                boolean = true;
            }
        })
        return boolean
    };

    useEffect(() => { }, [basket]);

    const buyPokemon = useCallback((id) => {
        const pokemon = [{
            id: pokemonDetails.details.id,
            image: pokemonDetails.details.image,
            name: pokemonDetails.details.name,
            price: pokemonDetails.details.price,
        }]
        dispatch(action.HANDLE_BUY_POKEMON({ id, pokemon }));
        setBasket(basketPokemon.length);
    }, [dispatch, pokemonDetails]);

    return <PokemonDetailsLayout
        pokemonDetails={pokemonDetails}
        basketPokemon={inBasket}
        buyPokemon={buyPokemon}
    />
}

export default PokemonDetailsContainer;