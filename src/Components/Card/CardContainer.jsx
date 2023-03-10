import React,{Fragment} from 'react'
import classes from './CardContainer.module.css'
import Card from './Card'
import image1 from '../../assets/photo1.png'
import image2 from '../../assets/photo2.png'
import image3 from '../../assets/photo3.png'
import image4 from '../../assets/photo4.png'

const CardContainer = () => {
  return (
    <Fragment>
<div className={classes.container}>
<Card image = {image1}/>
<Card image = {image2}/>
<Card image = {image3}/>
<Card image = {image4}/>
</div>
    </Fragment>
  )
}

export default CardContainer