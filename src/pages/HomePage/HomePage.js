import React from 'react'

import classes from './HomePage.module.css'

import Heading from '../../components/Heading'
import Image from '../../components/Image'

const HomePage = props => {
  return (
    <section>
      <Heading />
      <Image showDefault />
      <div className={classes.flexibleParent}>
        <div> 
          <div className={classes.pinkH1}> yes </div>
          <div className={classes.yesNo}>
            <ul>
              <li>
                <p>Powerful Peptides</p>
                </li>
              <li>
                <p>Potent Antioxidants</p>
              </li>
              <li>
                <p>Stable Vitamin C</p>
              </li>
              <li>
                <p>Active Enzymes</p>
              </li>
              <li>
                <p>Nutritious Plant Oils</p>
              </li>
              <li>
                <p>Balancing Essential Oils </p>
              </li>

              <li>
                <p> Vegetarian Formulas</p>
              </li>

              <li>
                <p>Gentle Preservatives </p>
              </li>
            </ul>
          </div>

        </div>
        <div>
          <div className={classes.pinkH1}> no </div>

          <div className={classes.yesNo}>
            <ul>
              <li>
                <p> Parabens</p>
                </li>
              <li>
                <p> Synthetic Colorants</p>
              </li>
              <li>
                <p> Synthetic Fragrance</p>
              </li>
              <li>
                <p>Phthalates </p>
              </li>
              <li>
                <p>Urea </p>
              </li>

              <li>
                <p>Formaldehyde Releasing <span className={classes.long}>
                  Preservatives </span></p>
              </li>

              <li>
                <p> Sodium Lauryl Sulfate</p>
              </li>
              <li>
                <p> Sodium Laureth Sulfate</p>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className={classes.flexibleParent2}>
        <div className={classes.pinkH2}>Professional skincare that delivers.
          <span className={classes.long}> Clean, safe, efficacious formulas.</span>
        </div>
        <div className={classes.italic}>
          Only available through your 
          licensed skincare professional.
        </div>
      </div>
    </section>
  )
}

export default HomePage
