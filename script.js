import express from 'express'
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/error', (req, res, next) => {
  throw Error('Somathing went wrong');
})

app.get('/', (req, res) => {
  res.render("index");
})


app.get('/contact', (req, res) => {
  res.render("contact");
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
});

app.listen(3000);