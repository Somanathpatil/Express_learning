import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  s[ofjgie  htjp]
  console.log(`Server is running on port ${PORT}`);
});