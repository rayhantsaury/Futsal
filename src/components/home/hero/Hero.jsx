import React from "react"
import { Link } from "react-router-dom" 
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='banner'>
            <Heading subtitle='WELCOME TO OFFICIAL WEBSITE' title='ACADEMY FUTSAL CLUB OMICRON'  />
            <div className="tembus"></div>
          </div>
          <p>Bukan sekedar club futsal, disini kami berproses bersama </p>
          <p>dan berteman lebih dari sodara</p>
            <Link to='/register'>
                <button type="button" className='primary-btn'>
                JOIN NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </Link>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
