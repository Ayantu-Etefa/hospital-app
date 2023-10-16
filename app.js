const express = require('express')
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./db/connection')
const patientDetailRoute = require('./routes/patientDetail')


const app = express()
app.use(cors())
const port = process.env.PORT || 9556


app.use(express.json())
app.use(patientDetailRoute)



app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public-flutter')));

module.exports = app;



app.listen(port, () => {
    console.log('Server is up on port '+ port)
})