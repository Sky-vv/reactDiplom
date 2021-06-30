import React from 'react';
import {
    Button,
    Box,
    Menu,
    MenuItem,
    Link,
    IconButton,
}
    from '@material-ui/core/';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './index.css'

const HeaderLayout = ({ isAuth, logOut, anchorEl, handleClick, handleClose, basketQuantity, StyledBadge }) => {
    return (
        <Box>
            <Box className='header'>
                <Box className='header__name'>
                    <Link className='header__link' href="/market/page1">
                        Pokemon Center 
                    </Link>
                </Box>
                <Box className='header__content'>

                    {isAuth ? <>
                        <Box className='header__basket'>
                            <IconButton href='#' aria-label="cart">
                                <StyledBadge badgeContent={basketQuantity.length} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Box>
                        <Box className='header__menu'>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Open Menu
                        </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {

                                }
                                <MenuItem onClick={handleClose}>
                                    <Button href='/market/profile'>Profile</Button>
                                </MenuItem>
                                <MenuItem onClick={logOut}>
                                    <Button href='/'>Log out</Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </> :
                        <></>
                    }

                </Box>
            </Box>
        </Box>
    )
}

export default HeaderLayout;