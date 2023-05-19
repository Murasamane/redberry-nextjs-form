import classes from './FinishPageLayout.module.css'

const FinishPageLayout = props =>{
    return <div className={classes.finishPageContainer}>
        {props.children}
    </div>
}


export default FinishPageLayout