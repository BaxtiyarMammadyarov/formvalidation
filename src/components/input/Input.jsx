import React from 'react'
import "./style.css"
function Input(props) {
    return (
        <div className={"divClass"} key={props.id}>
            <label htmlFor={props.id}  >
                {
                    (props.name ? <span> {props.name} : </span> : "")
                }
                <input
                    name={props.name}
                    type={"text"}
                    className={props.class}
                    value={props.data[props.id]} 
                    onChange = {props.setFun}
                    />
            </label>
            <span className='red'>{props.title[props.id]}</span>
        </div>
    )
}

export default Input