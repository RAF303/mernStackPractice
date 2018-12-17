const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();

const db = require('./config/keys').mongoURI;

mongoose
.connect(db)
.then(()=> console.log('mongo live'))
.catch(err => console.log(err)) 

app.get('/', (req,res) => res.send('hello'));

app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`We live ${PORT}`))