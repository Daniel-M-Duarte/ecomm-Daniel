import express from 'express'
import app from "./src/app.js";

const port = process.env.PORT || 3006;

app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})