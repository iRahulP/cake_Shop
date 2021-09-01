import React, { Fragment } from 'react'
import AvailableCakes from './AvailableCakes';
import CakesSummary from './CakesSummary';

const Shop = () => {
    return (
        <Fragment>
            <CakesSummary />
            <AvailableCakes />
        </Fragment>
    )
}

export default Shop
