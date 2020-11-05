import React from 'react';

export const CheckBox = props => {
    return (<>
       <input key={props.id} onChange={props.onCheesesChange} type="checkbox" checked={props.isChecked} value={props.value} />{props.value}
    </>
    )
}

export default CheckBox;