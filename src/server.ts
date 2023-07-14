import express from 'express';

const app = express();
const port = 3335;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello MuGoL' });
});

app.post('/courses', (req, res) => {
  const { name } = req.body;
  return res.json({ name });
});

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
