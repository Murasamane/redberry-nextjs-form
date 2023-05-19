import classes from './FormBackgroundLayout.module.css'

const FormbackgroundLayout = (props)=>{
    return <div className={classes.backgroundLayout}>{props.children}</div>
}
export default FormbackgroundLayout;