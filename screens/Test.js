import React from 'react';
import { ErgänzungTest } from './ErgänzungTest';
import { TestAdj } from './TestAdj';
import { TestNomVerv } from './TestNomVerb';

const Test = (props) => {
    if (props.route.params.testId == 1 || props.route.params.testId == 2) {
        return (

            <TestAdj  {...props} />

        );
    } else if (props.route.params.testId == 0) {
        return (
            <TestNomVerv {...props} />
        );
    } 
    // else if (props.route.params.testId == 3) {
    //     return (
    //         <ErgänzungTest {...props} />
    //     );
    // }
}

export { Test };