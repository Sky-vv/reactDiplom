import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../CatalogPage/actions'
import * as action from '../actions'


import BasketLayout from '../components/BasketLauout'

const BasketPageContainers = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.basketPokemon.pokemons);
    const userId = useSelector(state => state.authReducers.id)

    const [totalPrice, setTotalPrice] = useState();

    let price

    useEffect(() => {
        a()
    })
    const handleIncrement = useCallback((index) => {
        dispatch(actions.HANDLE_INCREMENT(index))
        a()
    }, [dispatch])

    const handleDecrement = useCallback((index) => {
        dispatch(actions.HANDLE_DECREMENT(index))
        a()
    }, [dispatch])

    const handleBuyAllPokemons = useCallback(() => {
        const order = {
            customerId: userId,
            totalPrice: price,
            itemsList: products
        }
        dispatch(action.BUY_POKEMON_REQUEST(order))
        dispatch(actions.HANDLE_REMOVE());
        a()
    }, [dispatch])

    const a = useCallback(() => {
        setTotalPrice(() => {
            let sum = 0;
            for (let i = 0; i < products.length; i++) {
                sum = sum + (products[i].quantity * products[i].price)
            }
            price = sum
            return sum

        })
    }, [])

    return <BasketLayout
        products={products}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleBuyAllPokemons={handleBuyAllPokemons}
        totalPrice={totalPrice}
    />
}

export default BasketPageContainers;