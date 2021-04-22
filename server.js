const express = require ('express')

const app = express() 
const contactRouter = require('./routes/contactList')



app.use(express.json())

require('./database/connect') ; 




app.use('/contact' , contactRouter) ;












app.listen(5000, err => {


err ? console.log('server error ! ') : 

console.log('server is running at port 5000 .......');





} )