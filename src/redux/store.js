
import { configureStore } from "@reduxjs/toolkit";
import Mreducer from './reducr'

export const Store=configureStore({
  reducer:{
    shopreducer:Mreducer
  }
  
})
