import React, { useState } from 'react';

const Currency = () => {
    const [currencySymbol, setCurrencySymbol] = useState('$');  // Default to Dollar
    const [displayValue, setDisplayValue] = useState('Currency ($ Dollar)'); // Default display value

    const handleCurrencyChange = (event) => {
        setCurrencySymbol(event.target.value);

        switch(event.target.value) {
            case '$':
                setDisplayValue('Currency ($ Dollar)'); 
                break;
            case '£':
                setDisplayValue('Currency (£ Pound)');
                break;
            case '€':
                setDisplayValue('Currency (€ Euro)');
                break;
            case '₹':
                setDisplayValue('Currency (₹ Rupee)');
                break;
            default:
                setDisplayValue('');
        }
    };

    return (
        <div className='alert alert-secondary' >
            <select 
                className="custom-select" 
                id="currencySelect" 
                onChange={handleCurrencyChange}
                value={currencySymbol}
            >
                {displayValue.includes("Currency") ? 
                    <option value={currencySymbol} hidden>{displayValue}</option> : 
                    null
                }
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;
