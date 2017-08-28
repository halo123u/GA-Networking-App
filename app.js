//Express dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//Secret key
require('dotenv').config();

//Middleware
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());
app.use(session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());


//Set up port for Localhost
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})

//Set up path for yarn build of the app
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//routes
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);

const profileRoutes = require('./routes/profile-routes');
app.use('/profile/', profileRoutes);

const messageRoutes = require('./routes/message-routes');
app.use('/messages', messageRoutes);

const eventRoutes = require('./routes/event-routes');
app.use('/events', eventRoutes);

//error handler
app.get('*',(req,res)=>{
    res.status(400).json({
        message: 'Not found!',
      });
});
