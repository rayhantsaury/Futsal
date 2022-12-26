import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <img src="./assets/images/lambang.png" alt="logo" className="navLogo" width={'80px'} height= {'70px'}   padding= {'100px'} />
          <div className='logo' style={{marginLeft: '-36em'}}>
            <h1>FC OMICRON</h1>
            <span>Club and Academy Futsal</span>
          </div>

          <div className='social'>
          <a href="https://www.facebook.com/RealMadrid/"><i className='fab fa-facebook-f icon'></i></a> 
           <a href="https://twitter.com/realmadrid"><i className='fab fa-twitter icon'></i></a> 
           <a href="https://www.instagram.com/fcomicron/?hl=id"><i className='fab fa-instagram icon'></i></a>
           <a href="https://www.youtube.com/channel/UCWV3obpZVGgJ3j9FVhEjF2Q"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
