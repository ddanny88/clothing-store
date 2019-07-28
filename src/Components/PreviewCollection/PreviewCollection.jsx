import React from 'react';
import './Preview.scss';
import Item from '../Item/Item';


const PreviewCollection = (props) => {
    const { title, items } = props;
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map(item => (
                    <Item key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default PreviewCollection;
