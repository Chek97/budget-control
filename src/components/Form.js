import React, { useState } from 'react';
import { Error } from './Error';
import shortId from 'shortid';
import PropTypes from 'prop-types';

export const Form = ({addBill, setCreateBill}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    //Agregar el gasto
    const handleSubmit = (e) => {
        e.preventDefault();

        //validar
        if(amount < 1 || isNaN(amount) || name.trim() === ''){
            setError(true);
            return;
        }
        //crear el gasto
        const bill = {
            name,
            amount,
            id: shortId.generate()
        }
        
        //enviar el gasto al componente principal
        addBill(bill);
        setCreateBill(true);
        //resetear el formulario
        setName('');
        setAmount(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar tus gastos aqui</h2>
            {
                error && <Error message="Ambos campos son obligatorios" />
            }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="ej. transporte"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Canridad Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="ej. 300"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />
            </div>
        </form>
    )
}

Form.propTypes = {
    addBill: PropTypes.func.isRequired,
    setCreateBill: PropTypes.func.isRequired
}