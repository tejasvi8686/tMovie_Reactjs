import React from 'react';
import { Route as ReactRoute, Routes } from 'react-router-dom'; // Rename the import

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const AppRoutes = () => {
    return (
        <Routes> 
            <ReactRoute // Use the renamed component
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <ReactRoute // Use the renamed component
                path='/:category/:id'
                component={Detail}
            />
            <ReactRoute // Use the renamed component
                path='/:category'
                component={Catalog}
            />
            <ReactRoute // Use the renamed component
                path='/'
                exact
                component={Home}
            />
        </Routes>
    );
}

export default AppRoutes;
