import macbook from '../puctures/112133147.jpg'
import iphone from '../puctures/121141343.jpg'
import airpod from '../puctures/1795420.jpg'
import a32 from '../puctures/1954138.jpg'
import a52 from '../puctures/2318560.jpg'
import lenovo3000 from '../puctures/4590241.jpg'
import m71 from '../puctures/5526747.jpg'
import m13 from '../puctures/674126.jpg'
import hp from '../puctures/b58571a0597214ff65ef54fc0fc7a958babb7bb3_1606923139.jpg'
import lg from '../puctures/c00626387f073b9cfa588bc1cd3b8cdcd15a5502_1597331198.jpg'
import { createSlice } from '@reduxjs/toolkit'









const initialState={
products:[
     {id:1,name:"coffee1",price:'10$',img:macbook,color:"black",connect:"wireless",weight:"1 kg"},
    {id:2,name:"coffee3",price:'40$',img:iphone,color:"grey",connect:"wireless",weight:"1.2 kg"},
    {id:3,name:"coffee4",price:'30$',img:airpod ,color:"white",connect:"wireless",weight:"1.2 kg"},
    {id:4,name:'coffee5',price:'25$',img:a52,color:"black",connect:"wireless",weight:"1.2 kg"},
    {id:5,name:'coffee6',price:'15$',img:a32,color:"white",connect:"wireless",weight:"1.2 kg"},
    {id:7,name:'coffee7',price:'10$',img:lenovo3000,color:"black",connect:"wireless",weight:"1.2 kg"},
    {id:8,name:'coffee8',price:'18.99$',img:m71,color:"black",connect:"wireless",weight:"1.1 kg"},
    {id:9,name:'coffee9',price:'38.5$',img:hp,color:"black",connect:"wireless",weight:"2.8 kg"},
    {id:10,name:'coffee10',price:'26$',img:lg,color:"silver",connect:"wireless",weight:"2.8 kg"},
    {id:11,name:'coffee11',price:'14$',img:m13,color:"silver",connect:"wireless",weight:"3 kg"},
],

card:[
    
],
currentitem:null

}














const Mreducer=createSlice({
name:'myreducer',
initialState,
reducers:{
add:(state,action)=>{
    const item=state.products.find(pro=>pro.id===action.payload.id)
const incard=state.card.find(item=>item.id===action.payload.id?true:false)
return{
    ...state,
    card:incard?state.card.map(item=>item.id===action.payload.id?{...item,qty:item.qty+1}:item):[...state.card,{...item,qty:1}]
}
},
remove:(state,action)=>{
    return{
        ...state,
        card:state.card.filter(item=>item.id!==action.payload.id)


    }
}

}
})



export const {add,remove}=Mreducer.actions;

export default Mreducer.reducer