// import {createStore} from 'redux'
// import Myreducer from './reducr';
// import {composeWithDevTools} from 'redux-devtools-extension'
import { configureStore } from "@reduxjs/toolkit";
import Mreducer from './reducr'
// const composedEnhancer=composeWithDevTools()

//   export const Store=createStore(Myreducer,composedEnhancer);
export const Store=configureStore({
  reducer:{
    shopreducer:Mreducer
  }
  
})