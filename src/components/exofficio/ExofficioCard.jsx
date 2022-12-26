import React from "react"
import { team } from "../../dummydata"

const ExofficioCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <a href={val.fb}><i className='fab fa-facebook-f icon'></i></a>
              <a href={val.ig}><i className='fab fa-instagram icon'></i></a>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ExofficioCard;
