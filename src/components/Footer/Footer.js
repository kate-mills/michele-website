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
      <div className={classes.copyright}>
        copyright &copy; Michele Corley Company, 3055 Jefferson Street, Suite 3, Napa,CA 94558
        <div>
        {new Date().getFullYear()} 
        All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
