import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegistationsLayout from '../components/RegistrationsLayout';
import * as actions from '../actions';


const RegistationsContainers = () => {

    const dispatch = useDispatch();
    const isSignUp = useSelector(state => state.registrationForm.message);

    const [showPassword, setShowPassword] = useState(false);
    const [registrationValue, setRegistrationValue] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: {
            country: "",
            city: "",
            addressLine1: "",
            addressLine2: ""
        },
        gender: "",
        password: "",
        phone: ""
    });

    useEffect(() => {
        if (!!isSignUp) {
            alert('Registration was successful. Now sign in to your account please.');
            setTimeout(() => {
                window.location.href = '/market'
            }, 500)
        }
    }, [isSignUp]);

    const handleFormChange = useCallback((event) => {
        let value = event.target.value;
        console.log(value)
        setRegistrationValue((state) => {
            return {
                ...state,
                [event.target.name]: value,
            }
        })
        console.log(registrationValue)

    }, [registrationValue])

    const handleFormSubmit = useCallback((event) => {
        const user = {
            email: registrationValue.email,
            firstName: registrationValue.firstName,
            lastName: registrationValue.lastName,
            address: {
                country: registrationValue.country,
                city: registrationValue.city,
                addressLine1: registrationValue.addressLine1,
                addressLine2: registrationValue.addressLine2
            },
            gender: registrationValue.gender,
            password: registrationValue.password,
            phone: registrationValue.phone
        }
        event.preventDefault();
        dispatch(actions.HANDLE_REGISTRATION_FORM_REQUEST(user))
    }, [registrationValue, dispatch]);

    const handleShowPassword = useCallback((boolean) => {
        setShowPassword(boolean);
    }, []);

    return <RegistationsLayout
        registrationValue={registrationValue}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        showPassword={showPassword}
        handleShowPassword={handleShowPassword}
    />
};

export default RegistationsContainers;

