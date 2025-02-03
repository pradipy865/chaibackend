require('dotenv').config()

const express = require('express')

const app = express()
const port = 4000
const githubData={
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest",
    "status": "404"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Pradip Yadav!")
})
app.get('/login',(req,res)=>{
    res.send("Welcome to our page!")
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})