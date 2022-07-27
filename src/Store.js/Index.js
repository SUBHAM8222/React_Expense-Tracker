import { configureStore, createSlice } from "@reduxjs/toolkit"

const authslice=createSlice({


    name:'auth',
    initialState: {loggedIn:true,IDTOKEN:null},
    reducers:{

        isloggedIn(state){

            state.loggedIn=!state.loggedIn;
        },
        tokenId(state,action){
            state.IDTOKEN=action.payload;
        },
        deletetokenId(state){
             state.IDTOKEN=null;   
        }

    }

})
const itemslice=createSlice({
    name:'items',
    initialState:{items:[]},
    reducers:{
          inputData(state,action){

            const newItem=action.payload;
            state.items.push({
                date:newItem.date,
                type:newItem.type,
                name:newItem.name,
                amount:newItem.amount,

            })
          },
          ReceivedData(state,action){

            state.items=action.payload;
          }

    }


})
const store=configureStore({
    reducer:{auth:authslice.reducer,data:itemslice.reducer}
})
export const authsliceactions=authslice.actions;
export const itemsliceactions=itemslice.actions;

export default store;