import React from 'react';
import './item.scss';
import FormButton from '../FormButton/FormButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/CartReducer/cartActions';
import { withRouter } from 'react-router-dom';

const Item = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    const addItemToCart = () => {
        addItem({...item})
    }
    return (
        <div className="collection-item">
            <div style={{backgroundImage: `url(${imageUrl})`}} className="image"/>
            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">${ price }</span>
            </div>
            <FormButton inverted onClick={addItemToCart}>Add to cart</FormButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}


export default withRouter(connect(null, mapDispatchToProps)(Item));