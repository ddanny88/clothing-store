import React from 'react';
import './menuitem.scss';
import { withRouter } from 'react-router-dom';


const MenuItem = (props) => {
    const { title, imageUrl, size, history, linkUrl, match } = props;
    // console.log(props)

    const navitgate = () => {
        history.push(`${match.url}${linkUrl}`)
        // history.push(`/${linkUrl}`)
        // history.push(`/${title}`)
    }

    return (
        <div className={`${size} menu-item`} onClick={navitgate}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);

