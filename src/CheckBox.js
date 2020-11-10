import React from 'react';

export const CheckBox = props => {
    return (<>
       <input key={props.id} onClick={props.onCheckBoxChange} type="checkbox" checked={props.isChecked} value={props.value} name={props.name} />{props.value}
    </>
    )
}

export default CheckBox;