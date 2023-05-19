import { forwardRef } from "react";
import classes from './Input.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <div className={`${classes.input__container} ${props.parentClass}`}>
      <p>{props.uploadText}</p>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type}
        id={props.id}
        ref={ref}
        className={props.className}
        minLength={props.minLength}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
      />
      <p>{props.hint}</p>
    </div>
  );
});

export default Input;
