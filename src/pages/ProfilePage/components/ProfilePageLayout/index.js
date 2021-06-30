import React from 'react';
import { Box } from '@material-ui/core';

import avatar from './images/avatar.png'

import './index.css';

const ProfilePageLayout = ({
    user,
    orderList,
    logOut
}) => {
    return (
        <Box>
            <Box className='profile'>
                <Box className='profile__user'>
                    <Box className='profile__head'>
                        <Box className='profile__avatar'>
                            <img className='profile__avatar-img' src={avatar} alt='avatar' />
                        </Box>
                        <Box className='profile__name'>
                            {user.userName}
                        </Box>
                    </Box>
                    <Box className='profile__setting'>
                        <Box className='setting__item'>Main</Box>
                        <Box className='setting__item'>Personal information</Box>
                        <Box className='setting__item'>Safety</Box>
                        <Box className='setting__item'>Access settings</Box>
                        <Box className='setting__item' onClick={logOut}>Log out</Box>
                    </Box>
                </Box>
                <Box className='profile__history'>
                    <Box className='history__head'>
                        history of your purchases
                    </Box>
                    <Box>
                        {!!!orderList ? '' : orderList.map((item, index) => (
                            <Box key={index} className='history__item'>
                                <Box className='history__item__head'>Your order number № {Math.random() * Math.pow(10, 17)}</Box>
                                <Box className='history__item__body'>
                                    {item.itemsList.map((pokemon, pokIndex) => (
                                        <Box key={pokIndex} className='history__item__pokemon'>
                                            <Box>Product name: {pokemon.name}</Box>
                                            <Box>Quantity: {pokemon.quantity}</Box>
                                            <Box>Unit price: ${pokemon.price}</Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Box className='history__item__footer'><b>Total price</b> ${item.totalPrice}</Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default ProfilePageLayout;