const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());


//importing user routes
const userRoutes = require('./routes/userRoute');
app.use('/api/auth', userRoutes);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amira:amira@cluster0.dgk2y.mongodb.net/lezarts?retryWrites=true&w=majority',{ useNewUrlParser: true, useCreateIndex: true })
.then(()=>console.log('database connected ...!'))
.catch((err)=> console.log(err));

port = 8081;
app.listen(port);



