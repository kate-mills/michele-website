import React from 'react'

import classes from './HomePage.module.css'

import Heading from '../../components/Heading'

const HomePage = props => {
  return (
    <section>
      <Heading />
      <article 
        className={classes.pageArticle}
      > 
        images
      </article>

      <article>
        yes no
      </article>

    </section>
  )
}

export default HomePage
