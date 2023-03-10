import React,{Fragment} from 'react'
import classes from './Type.module.css'

const Type = ({title}) => {
  return (
    <Fragment>
        <div className={classes.type}>
            <p>{title}</p>
        </div>
    </Fragment>
  )
}

export default Type