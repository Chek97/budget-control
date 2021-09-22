import React from 'react';
import { Bill } from './Bill';
import PropTypes from 'prop-types';

export const List = ({bills}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {
            bills.map((bill) => (
                <Bill key={bill.id} bill={bill} />
            ))
        }
    </div>
)

List.propTypes = {
    bills: PropTypes.array.isRequired
}