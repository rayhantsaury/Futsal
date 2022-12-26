import React from "react"
import Back from "../common/back/Back"
import ExofficioCard from "./ExofficioCard"
import "./exofficio.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Exofficio = () => {
  return (
    <>
      <Back title='EX-Officio' />
      <section className='team padding'>
        <div className='container grid'>
          <ExofficioCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Exofficio;
