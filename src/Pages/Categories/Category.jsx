import React from 'react';
import './categories.scss';
import Item from '../../Components/Item/Item';
import { selectCollection } from '../../redux/ShopReducer/shop.selector';
import { connect } from 'react-redux';

const Category = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <Item key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}

/**
 * if the ownProps parameter is specified, react-redux will pass the props that were passed to the component into your connect functions. This is how we are able to use the match.params.categoryId.
*/
const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.categoryId)(state)
    }
}

export default connect(mapStateToProps)(Category);