import React from 'react';
// import './directory.scss';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';

import { selectSections } from '../../redux/DirectoryReducer/directory.selecor';
import { createStructuredSelector } from 'reselect';

import { DirectoryMenu } from './directory.styles';

const Directory = ({ sections }) => {
    return (
        <DirectoryMenu>
            { sections.map(item => (
                <MenuItem key={item.id} {...item} />
            ))}
        </DirectoryMenu>
    )
}



const mapStateToProps = createStructuredSelector({
    sections: selectSections
});

export default connect(mapStateToProps)(Directory);
