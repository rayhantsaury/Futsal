import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./NewsCard"

const News = () => {
  return (
    <>
      <Back title='News' />
        <div className='newss'>
          <PriceCard />
        </div>
    </>
  )
}

export default News;
