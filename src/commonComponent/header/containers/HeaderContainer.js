import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core/';

import HeaderLayout from '../components/HeaderLayout/index';

const HeaderContainer = () => {
    const dispatch = useDispatch();

    const basketQuantity = useSelector(state => state.basketPokemon.pokemons);
    const isAuth = useSelector(state => state.authReducers.isAuth)

    const [anchorEl, setAnchorEl] = useState(null);

    const logOut = useCallback(() => {
        localStorage.clear();
    }, [])

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);

    return <HeaderLayout
        isAuth={isAuth}
        logOut={logOut}
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        basketQuantity={basketQuantity}
        StyledBadge={StyledBadge}
    />
}

export default React.memo(HeaderContainer);