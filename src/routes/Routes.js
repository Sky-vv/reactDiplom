import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePageContainer from '../pages/HomePage/container/HomePageContainer';
import RegistationsContainers from '../pages/RegistrationPage/containers/RegistrationsContainer';
import MarketContainers from '../pages/CatalogPage/containers/MarketContainers';
import PokemonDetailsContainer from '../pages/DetailsInfoPage/containers/PokemonDetailsContainer';
import BasketPageContainers from '../pages/BasketPage/containers/BasketPageContainers';
import ProfilePageContainer from '../pages/ProfilePage/containers/ProfilePageContainer';

import PrivateRoute from './PrivateRoute';
import ROUTES from './routesNames';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
            <Route exact path={ROUTES.REGISTRATION} component={RegistationsContainers} />
            <PrivateRoute exact path={ROUTES.MARKET_PAGE} component={MarketContainers} />
            <PrivateRoute exact path={ROUTES.POKEMON_DETAILS_PAGE} component={PokemonDetailsContainer} />
            <PrivateRoute exact path={ROUTES.BASKET_PAGE} component={BasketPageContainers} />
            <PrivateRoute exact path={ROUTES.PROFILE_PAGE} component={ProfilePageContainer} />
        </Switch>
    )
}

export default Routes;