import React, { useState } from 'react';
import { Error } from './Error';
import PropTypes from 'prop-types';

export const QuestionForm = ({fullBudgetSave, remainSave, show}) => {

    //state del presupuesto
    const [budget, setBudget] = useState(0);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        //convertir los numeros
        setBudget(parseInt(e.target.value));
    }
    
    const addBudget = (e) => {
        e.preventDefault();

        //validar si el valor es positivo y es valor numerico
        if(budget < 1 || isNaN(budget)){
            setError(true);
            return;
        }
        //si el valido es true
        setError(false);
        fullBudgetSave(budget);
        remainSave(budget);
        show(false);

    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>
            {
                error && <Error message="El presupuesto no es correcto" />
            }
            <form onSubmit={addBudget}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleChange}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"

                />
            </form>
        </>
    )
}

QuestionForm.propTypes = {
    fullBudgetSave: PropTypes.func.isRequired,
    remainSave: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired
}
