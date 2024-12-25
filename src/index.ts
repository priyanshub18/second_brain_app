import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

//if it could not find the file for declration of the types in typescript then we should put install the @types/express file using npm install @types/express 
const app = express();
mongoose.connect(
    "mongodb+srv://priyanshub18:prBh1234@server-1.iuaxz.mongodb.net/second-brain-app"
  );

app.post('/api/v1/signup', (req, res) => {
  
});


app.post('/api/v1/signin', (req, res) => {
  
});


app.get('/api/v1/content', (req, res) => {
  
});


app.delete('/api/v1/content', (req, res) => {
  
});


app.post('/api/v1/brain/share', (req, res) => {
  
});

app.get('/api/v1/brain/:shareLink', (req, res) => {
  
});

