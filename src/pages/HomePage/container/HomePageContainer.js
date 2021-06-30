import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SIGN_IN_REQUEST } from '../actions';

import HomePageLayout from '../components/HomePageLayout'

const HomePageContainer = () => {
    const dispath = useDispatch();
    const isAuth = useSelector(state => state.authReducers);
    const [modal, setModal] = useState('modal');
    const [loginValue, handleChange] = useState({ email: '', password: '' });

    const handleOpenModal = useCallback(() => {
        setModal(() => {
            return 'modal modal-active'
        })
    }, [modal])

    const handleCloseModal = useCallback(() => {
        setModal(() => {
            return 'modal'
        })
    }, [modal])

    const handleLoginChange = useCallback((event) => {
        let value = event.target.value;
        handleChange((state) => {
            return {
                ...state,
                [event.target.name]: value,
            }
        })
    }, [loginValue])

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispath(SIGN_IN_REQUEST(loginValue));
    }, [loginValue, dispath]);

    const handleLogOut = () => {
        localStorage.clear();
    };

    return <HomePageLayout
        modalClass={modal}
        loginValue={loginValue}
        isAuth={isAuth}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        handleLoginChange={handleLoginChange}
        handleSubmit={handleSubmit}
        handleLogOut={handleLogOut}
    />
}

export default HomePageContainer;