import {GET_CONTACTS , GET_CONTACTS_FAIL , GET_BY_ID ,CLEAR_CONTACT_BY_ID} from './actions/actionsTypes'


const initialState ={

contacts : [] , 
contactById : {}

}


const reducer = (state = initialState , action) => {

switch(action.type) {

case GET_CONTACTS :  return {...state , contacts : action.payload }
case GET_BY_ID : return {...state , contactById : action.payload}
case CLEAR_CONTACT_BY_ID : return {...state , contactById:{}}
 
default : return state



}

}

export default reducer