import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile', (req, res) => {
    res.send('Hello this is my profile')
  })

  app.get('/user', (req, res) => {
    res.send('This is a user page')
  })

  app.get('/login', (req, res) => {
    res.send('this is a login page')
  })


app.listen(3000)