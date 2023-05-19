import classes from './ListLayout.module.css'
const ListLayout = (props)=>{
    return <div className={classes.container}>
        {props.children}
    </div>
}

export default ListLayout