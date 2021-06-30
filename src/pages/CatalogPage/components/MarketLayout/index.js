import React from 'react';
import {
    Button,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    CircularProgress
} from '@material-ui/core/';

import './index.css';

const MarketLayout = ({
    pokemons,
    basketPokemon,
    capitalizeFirstLetter,
    hendlePokemonBuy,
    handleGoToDetails,
    pages,
    handleChangePage,
    activePage,
}) => {

    return (
        <Box>
            <Box className='card'>
                {pokemons.isLoading ? <CircularProgress /> : pokemons.data.map(pokemon => (
                    <Card
                        className='card__item'
                        key={pokemon.id}
                        style={{ border: basketPokemon(pokemon.id) ? '4px solid #48d848' : '' }}>
                        <CardActionArea>
                            <CardMedia
                                onClick={() => handleGoToDetails(pokemon.id)}
                                className='card__item__img'
                                image={pokemon.image}
                                title={pokemon.name}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography>
                                {capitalizeFirstLetter(pokemon.name)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => hendlePokemonBuy(pokemon.id)}
                            >
                                ${pokemon.price}
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            <Box className='pagination'>
                {console.log('updated')}
                {pages.map(index => (
                    <>
                        {activePage == index ?
                            < Box
                                key={index}
                                className='pagination__btn'
                                onClick={() => handleChangePage(index)}
                            >
                                {index}
                            </Box>
                            :
                            <Box
                                style={{ backgroundColor: 'yellow' }}
                                key={index}
                                className='pagination__btn'
                                onClick={() => handleChangePage(index)}
                            >
                                {index}
                            </Box>
                        }
                    </>

                ))
                }
            </Box >
        </Box >
    )
}

export default React.memo(MarketLayout);