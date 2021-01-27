import React from 'react';
import data from './data.json';
import { List } from './List';

const NomVerbVerbin = (props) => {

    return (
            <List {...props} data={data.NomVerbVerbin} linkEx='ExampleNomVerb' />
    );
}

export { NomVerbVerbin };