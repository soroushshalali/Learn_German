import React from 'react';
import data from './data.json'
import { List } from './List';

const AdjMitPro = (props) => {

    return (
            <List {...props} data={data.AdjMitPro} linkEx='ExampleAdj' />
    );
}

export { AdjMitPro };