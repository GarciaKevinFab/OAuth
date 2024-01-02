import express from 'express';
import session from 'express-session';
import passport from 'passport';
import './config/passport-setup.js';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';

const app = express();

app.use(session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

export default app;
