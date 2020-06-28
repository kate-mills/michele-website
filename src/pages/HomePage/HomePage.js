import React from 'react'

import classes from './HomePage.module.css'

import Heading from '../../components/Heading'
import Image from '../../components/Image'

const HomePage = props => {
  return (
    <section>
      <Heading />
      <Image showDefault/>
      <article className={classes.pageArticle}>images</article>

      <article>yes no</article>
    </section>
  )
}

export default HomePage
