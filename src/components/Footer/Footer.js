import React from 'react'
import classes from './Footer.module.css'
import socialIcons from '../../constants/social-icons'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.follow}>Follow us on</div>
      <div className={classes.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              className={classes[item.class]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={classes.information}>
        <div>
          <span className={classes.phone}>707.637.4996</span>
            <span className={classes.tilda}>~</span>

          <span className={classes.email}>info@michelecorley.com</span>
        </div>
        <div className={classes.address}>
          <span className={classes.street}>3055 Jefferson Street, Suite 3
            <span className={classes.comma}>, </span>
          </span>
          <span className={classes.cityState}>Napa, CA 94558</span>
        </div>
        <div>
          <span className={classes.copyright}>copyright &copy; Michele Corley Company
            <span className={classes.comma}>,</span>

          </span>
          <span className={classes.rights}>{new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
