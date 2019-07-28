import React from 'react';
import './FormInput.scss';

const FormInput = (props) => {
    const { handleChange, label, ...inputProps } = props;
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...inputProps}/>
            {
                label ?
                (<label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                :
                null
            }
        </div>
    )
}

export default FormInput;