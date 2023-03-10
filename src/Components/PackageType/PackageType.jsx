import React,{Fragment} from 'react'
import classes from './PackageType.module.css'
import Type from './Type'

const PackageType = () => {
  return (
    <Fragment>
        <div className={classes.container}>
            <Type title = 'Maldives' />
            <Type title = 'Samudram' />
            <Type title = 'Cordelia' />
            <Type title = 'Agatti' />
            <Type title = 'More' />
        </div>
    </Fragment>
  )
}

export default PackageType