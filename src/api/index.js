const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const {Pool} = require('pg')

app.use(cors())

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

app.get('/mammals', async(req, res) => {
    try{
        const response = await pool.query("SELECT * FROM animalspecies")
        res.status(200).json(response.rows)
    }catch(error){
        console.log(error);
    }
})

app.get('/mammalbreeds', async(req, res) => {
    try{
        const response = await pool.query("SELECT * FROM animalbreeds")
        res.status(200).json(response.rows)
    }catch(error){
        console.log(error);
    }
})

app.get('/birdspecies', async(req, res) => {
    try{
        const response = await pool.query("SELECT * FROM birdspecies")
        res.status(200).json(response.rows)
    }catch(error){
        console.log(error);
    }
})

app.get('/birdbreeds', async(req, res) => {
    try{
        const response = await pool.query("SELECT * FROM birdbreeds")
        res.status(200).json(response.rows)
    }catch(error){
        console.log(error);
    }
})

app.get('/reptilespecies', async(req, res) => {
    try{
        const response = await pool.query("SELECT * FROM reptilespecies")
        res.status(200).json(response.rows)
    }catch(error){
        console.log(error);
    }
})

app.get('/reptilebreeds', async(req, res) => {
    try{
        const response = await pool.query("SELECT * FROM reptilebreeds")
        res.status(200).json(response.rows)
    }catch(error){
        console.log(error);
    }
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})