import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@material-ui/core';

import './index.css';

const BasketLayout = ({
    products,
    handleIncrement,
    handleDecrement,
    handleBuyAllPokemons,
    totalPrice
}) => {
    return (
        <Box>
            <Box className='basket__name'>
                Your basket
            </Box>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product name</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">+</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Total price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((item, index) => (
                            <TableRow key={uuidv4()}>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => handleDecrement(index)}>-</Button>
                                </TableCell>
                                <TableCell align="center">{item.quantity}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => handleIncrement(index)}>+</Button>
                                </TableCell>
                                <TableCell align="center">${item.price}</TableCell>
                                <TableCell align="center">${item.quantity * item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableRow>
                        <TableCell align="center"> </TableCell>
                        <TableCell align="center"> </TableCell>
                        <TableCell align="center"> </TableCell>
                        <TableCell align="center"> </TableCell>
                        <TableCell align="center"> </TableCell>
                        <TableCell align="center">${products.length === 0 ? 0 : totalPrice}</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
            <Button
                className='buy__btn'
                variant="contained"
                color="primary"
                onClick={handleBuyAllPokemons}
                disabled={products.length === 0 ? true : false}
            >Buy</Button>

        </Box >
    )
}

export default BasketLayout;