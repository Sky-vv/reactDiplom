import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import * as actions from '../actions';
import ROUTES from '../../../routes/routesNames';

import MarketLayout from '../components/MarketLayout';

const MarketContainers = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams()

    const activePage = useSelector(state => state.activePage.page);
    const marketReducer = useSelector(state => state.marketReducer);
    const basketPokemon = useSelector(state => state.basketPokemon.pokemons)

    const pokemon = marketReducer.data;
    const pages = []

    const [basket, setBasket] = useState(basketPokemon.length)

    useEffect(() => {
        console.log(activePage)
        console.log(history)
        dispatch(actions.GET_POKEMON_REQUEST(params.id))
    }, [params, dispatch]);

    const createNumberPages = () => {
        for (let i = 1; i < 46; i++) {
            pages.push(i)
        }
    }
    createNumberPages()

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleBuyPokemon = useCallback((id) => {
        dispatch(actions.HANDLE_BUY_POKEMON({ id, pokemon }));
        setBasket(basketPokemon.length);
    }, [dispatch, pokemon])

    const handleGoToDetails = useCallback((id) => {
        history.push(`${ROUTES.MARKET}/pokemon${id}`)
    }, [basket])

    const handleChangePage = useCallback((id) => {
        history.push(`${ROUTES.MARKET}/page${id}`)
        dispatch(actions.HANDLE_CHANCHE_PAGE(id))
        dispatch(actions.GET_POKEMON_REQUEST(id))

        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }, [dispatch]);

    const added = (id) => {
        let boolean;
        basketPokemon.forEach(item => {
            if (id === item.id) {
                boolean = true;
            }
        })
        return boolean;
    }

    return <MarketLayout
        pokemons={marketReducer}
        basketPokemon={added}
        capitalizeFirstLetter={capitalizeFirstLetter}
        hendlePokemonBuy={handleBuyPokemon}
        handleGoToDetails={handleGoToDetails}
        pages={pages}
        handleChangePage={handleChangePage}
        activePage={activePage}
    />
}

export default React.memo(MarketContainers);