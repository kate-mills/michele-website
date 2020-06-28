import React from "react";
import {Link} from 'react-router-dom'
import classes from './Error.module.css'

const Error = () => {
  return (
    <section className={`${classes.errorPage} section`}>
      <div className={`${classes.errorContainer} section`}>
        <h1>oops! its a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>

  )
}
export default Error
