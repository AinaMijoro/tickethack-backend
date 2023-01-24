const mongoose = require('mongoose')

const connectionString = "mongodb+srv://admin:Bassman75011@cluster0.ipnlyqf.mongodb.net/tickethack";

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
 .catch (error => console.error(error));

