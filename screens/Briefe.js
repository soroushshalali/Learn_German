import React from 'react';
import data from './data.json';
import { List } from './List';

const Briefe = (props) => {

    return (
        <List {...props} data={data.briefe} linkEx="Brief" />
    );
}

export { Briefe };