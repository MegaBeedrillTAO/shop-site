const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const {login, logout, register, deleteUser, editUser} = require('./controllers/authController')
const {getInfo, editInfo} = require('./controllers/infoController')

app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

massive(CONNECTION_STRING).then(dbInst => {
    app.set("db", dbInst);
    console.log('Connected to Database');
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
})) 


//auth
app.post('/auth/login', login);
app.post('/auth/logout', logout);
app.post('/auth/register', register);
app.put('/auth/edit', editUser);
app.delete('/auth/delete', deleteUser);


//info
app.get('/api/info', getInfo);
app.put('/api/info/edit', editInfo);


app.listen(SERVER_PORT, () =>{
    console.log(`Listening on port ${SERVER_PORT}`);
})