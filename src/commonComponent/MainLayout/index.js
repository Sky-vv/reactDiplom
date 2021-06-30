import React from 'react';
import HeaderContainer from '../header/containers/HeaderContainer';

const MainLayout = ({ children }) => {
    return (
        <>
            <HeaderContainer />
            {children}
        </>
    );
};

export default MainLayout;