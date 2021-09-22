import React from 'react';
import PropTypes from 'prop-types';

export const Bill = ({bill}) => (
    <li className="gastos">
        <p>
            {bill.name}
            <span className="gasto">$ {bill.amount}</span>
        </p>
    </li>
)

Bill.propTypes = {
    bill: PropTypes.object.isRequired
}
