import React from 'react';
import { reviewBudget } from '../helpers/helpers';
import PropTypes from 'prop-types';

export const ControlAmount = ({fullBudget, remain}) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: ${fullBudget}
            </div>
            <div className={reviewBudget(fullBudget, remain)}>
                Restante: ${remain}
            </div>
        </>
    )
}

ControlAmount.propTypes = {
    fullBudget: PropTypes.number.isRequired,
    remain: PropTypes.number.isRequired
}