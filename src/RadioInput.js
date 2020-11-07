import React from 'react';

export const RadioInput = props => {
    return (<div>
        <input key={props.id} onChange={props.onRadioInputChange} type="radio" checked={props.isChecked} value={props.value} />{props.value}
    </div>
    )
}

export default RadioInput;