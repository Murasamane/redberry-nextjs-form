import classes from './FormLayout.module.css'
const FormLayout = (props)=>{
    return <div className={classes.container}>
        {props.children}
    </div>
}

export default FormLayout;