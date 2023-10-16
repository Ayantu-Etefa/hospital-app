const mongoose = require('mongoose')
const url = "mongodb+srv://admin:admin@cluster0.eqgvban.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
const connectionParams={
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    dbName : "hospitalAppDb"
}
mongoose.connect(process.env.ATLAS_URL || url,connectionParams)
    .then( () => {
        console.log('Connected to the Atlas-remote ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


