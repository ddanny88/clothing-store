import React from 'react';
import './overview.scss';
import { connect } from 'react-redux';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsOverview } from '../../redux/ShopReducer/shop.selector';


import {CollectionsOverviewContainer} from './collectionsOverview'

const Overview = ({ collections }) => {
    return (
        <CollectionsOverviewContainer>
            {collections.map(collection => (
                <PreviewCollection key={collection.id} {...collection} />
            ))}
        </CollectionsOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsOverview
});

export default connect(mapStateToProps)(Overview);