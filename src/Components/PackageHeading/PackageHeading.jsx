import React,{Fragment} from 'react'
import classes from './PackageHeading.module.css'

const PackageHeading = () => {
  return (
    <Fragment>
        <div className={classes.packageHeading}>
            <h2>Best Packages For You</h2>
            <p>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
        </div>
    </Fragment>
  )
}

export default PackageHeading