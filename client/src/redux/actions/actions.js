import {GET_CONTACTS ,
    GET_CONTACTS_FAIL
     ,ADD_CONTACT
      ,ADD_CONTACT_FAIL
       ,DELETE_CONTACT ,
       UPDATE_CONTACT , 
       UPDATE_CONTACT_FAIL ,
       GET_BY_ID ,
       CLEAR_CONTACT_BY_ID
    
    } from './actionsTypes'

import axios from 'axios' 






export const getContacts = () => dispatch => {

axios.get('/contact')
.then(res => dispatch({type : GET_CONTACTS , payload : res.data.contacts}))
.catch(err => {
    
    dispatch({type : GET_CONTACTS_FAIL}) ;

    console.log(err);



})}


export const addContact = (newContact) => dispatch => {

axios.post('/contact' , newContact)
.then(res => {

dispatch({type:ADD_CONTACT})

dispatch(getContacts())

console.log(res.data);

})
.catch(err=> {

dispatch({type:ADD_CONTACT_FAIL})

console.log(err)


})}



export const deleteContact = (id) => dispatch => {

axios.delete(`/contact/${id}`)
.then(res => {

dispatch({type : DELETE_CONTACT})

dispatch(getContacts())

console.log(res.data)

})
.catch(err => console.log(err))

}

export const updateContact = (id , newValue) => dispatch => {

axios.put(`/contact/${id}` , newValue)
.then((res) => {

dispatch({type : UPDATE_CONTACT})

dispatch(getContacts())
})
.catch(err => dispatch({type:UPDATE_CONTACT_FAIL}))

}


export const getContactById = (id) => dispatch => {

axios.get(`/contact/${id}`)
.then((res) => dispatch({type:GET_BY_ID , payload : res.data}))
.catch ((err) => console.log(err))

}

export const clearContact =() => {

return {type : CLEAR_CONTACT_BY_ID}


}