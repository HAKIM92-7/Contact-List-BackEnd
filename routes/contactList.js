const express = require ('express')

const router = express.Router()

const Contact = require ('../models/ContactList')


//@method  POST  /contact 
//@desc  add new contact



router.post('/' ,  (req, res) => {


const {name,email,telephone} = req.body

const newContact = new Contact({name,email,telephone})

newContact.save()

.then(() => res.send({msg:"contact added" , newContact}))
.catch((err) => res.send({msg:"server error" , err}))

})


//@method  GET  /contact 
//@desc  get all contacts



router.get('/' , (req,res) => {


Contact.find({})
.then((contacts) => res.send({msg : "list of contacts" , contacts}))
.catch((err) => res.send('server error!'))


})

//@method  PUT  /contact/:id 
//@desc  update a contact


router.put('/:id' , (req,res) => {

Contact.findByIdAndUpdate(req.params.id , req.body)
.then((contact) => res.send({msg:"contact Updated" , contact}))
.catch((err) => res.send("server error !"))

})


//@method  DELETE  /contact/:id 
//@desc  delete a contact

router.delete('/:id' , (req,res) => {


Contact.findByIdAndDelete(req.params.id)
.then(() => res.send('contact deleted'))
.catch ((err) => res.send('server error!'))




})






module.exports = router