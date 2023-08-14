import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [budget2, setBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);

        if (updatedBudget > 20000) {
            alert("The value cannot exceed £20000");
            return;
        }

        if (updatedBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        setBudget(updatedBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: £
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={budget2}
                    step='10'
                    style={{ size: 10 }}
                    onChange={handleBudgetChange}
                />
            </span>
        </div>
    );
};

export default Budget;
