import React from 'react'
import classes from './Image.module.css'

import defaultImage from '../../assets/images/3-women.jpg'

const Image = props => {
  return (
    <article>
      {props.showDefault ? <div className={classes.default}></div> : <div />}
      <img className={classes.largeImage} src={props.src} alt={props.alt} />
    </article>
  )
}

Image.defaultProps = {
  src: defaultImage,
  alt: 'Portrait of 3 women representing Michele Corley Clinical Skincare',
}
export default Image
