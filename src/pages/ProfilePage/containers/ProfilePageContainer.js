import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_ORDER_REQUEST } from '../actions';

import ProfilePageLayout from '../components/ProfilePageLayout'


const ProfilePageContainer = () => {

    const user = useSelector(state => state.authReducers);
    const orderList = useSelector(state => state.orderList.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_ORDER_REQUEST())
    }, [dispatch])

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/'
    };

    return <ProfilePageLayout
        user={user}
        orderList={orderList}
        logOut={logOut}
    />
};

export default ProfilePageContainer;