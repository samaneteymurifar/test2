// const express = require('express') ;
// // it returns a function
// const React=require('react');
// const renderToString= require ('react-dom/server').renderToString
// const Home = require ('./client/components/Home').default;
// const app=express(); 
// // we use express() function and it returns  an object

import 'babel-Polyfill';
import express from 'express';
import  renderer  from './helper/renderer';
import createStore from './helper/createStore';
const app=express(); 



app.use(express.static('public'));

app.get('*',(req,res)=>{
    const store=createStore()
    res.send(renderer(req,store))
})

const port = 4200;
app.listen(port,()=> {
    console.log(`listening on ${port}`);
})


