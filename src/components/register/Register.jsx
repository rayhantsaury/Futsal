import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./RegisterCard"
import "./register.css"

const Register = () => {
  return (
    <>
      <Back title='Register' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Register;
