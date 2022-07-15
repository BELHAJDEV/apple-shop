import { faAnchorCircleExclamation } from "@fortawesome/free-solid-svg-icons"


export const initialState = {
    bag : [],
    user : {
        username : '',
        email : ''
    },
    total : 0,
    test : 'Yes'

}

export const reducer = (state,action) =>{
    switch(action.type){
        case 'TOTAL' : 
            return{
                ...state,
                total : state.total + action.payload
            }
        case 'ADD_TO_BAG':
            return{
                ...state,
                bag : [action.payload,...state.bag]
            }
        case 'SET_USER' : 
            return {
                ...state,
                user : action.payload
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                bag : state.bag.filter((item)=> item.id != action.payload)
            }
        case 'EMPTY_BAG':
            return {
                ...state,
                bag : []
            }
        default : {
            return {
                state
            }
            
        }
    }
}