 import { BUY_CAKE } from "./cakeType"
 const initalState = {
     numOfCakes : 10
 }


 const cakeReducer = (state = initalState, action)=>{
     switch(action.type) {
         case BUY_CAKE:
             return{
                 numOfCakes= state.numOfCakes -1
             }
             default: 
             return state
     }
 }

 export default cakeReducer