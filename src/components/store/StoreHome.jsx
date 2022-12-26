import React from "react"
import Back from "../common/back/Back"
import StoreCard from "./StoreCard"
import Awrapper from "../about/Awrapper"
import "./store.css"


const Store = () => {
  return (
    <>
    <Back title='Online Store' />
        <StoreCard/>
    <Awrapper />
  </>
  )
}

export default Store;
