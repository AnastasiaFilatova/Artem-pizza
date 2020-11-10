import React from 'react';

export const RadioInput = props => {
    return (<div>
        <input key={props.id} onChange={props.handleItemChange} type="radio" checked={props.isChecked} value={props.value} name={props.name} />{props.value}
    </div>
    )
}

export default RadioInput;