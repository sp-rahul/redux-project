const redux = require('redux') 
const produce = require('immer').produce

const { createStore } = require("redux")

const initialState = {
    name: 'Vishahs',
    address: {
        street: '123 main , Mirpur',
        city: 'Dhaka',
        country: 'Bangladesh',
    },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet =(street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case STREET_UPDATED: 
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     }
              

            // }

            // Another way of updating
            return  ( produce(state, (draft)=>{
                    draft.address.street = action.payload
            }))
            default:{
                return state
            }
    }
}

const store = redux.createStore(reducer)
console.log('Initial state ', store.getState())
const unsubscribe = store.subscribe(()=> console.log('Update state ',store.getState()))

store.dispatch(updateStreet('ruhul Amin'))


unsubscribe()



