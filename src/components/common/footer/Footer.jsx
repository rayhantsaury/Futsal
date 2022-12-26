import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className='legal'>
            <h1>Futsal Club Omicron</h1>
           <a href="https://www.facebook.com/RealMadrid/"><i className='fab fa-facebook-f icon'></i></a> 
           <a href="https://twitter.com/realmadrid"><i className='fab fa-twitter icon'></i></a> 
           <a href="https://www.instagram.com/fcomicron/?hl=id"><i className='fab fa-instagram icon'></i></a> 
        <p>
        © Copyright 2022, Futsal Club Omicron. All Rights Reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
