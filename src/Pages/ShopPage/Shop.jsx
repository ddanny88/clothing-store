import React from 'react';
import Overview from '../../Components/Collections-overview/Overview';
import { Route } from 'react-router-dom';
import Category from '../Categories/Category';






// This coponent contains nested routes. So when the page is loaded, the overview component will be fired.

const Shop = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={Overview} />
            <Route path={`${match.path}/:categoryId`} component={Category} />

        </div>
    )
}

export default Shop;