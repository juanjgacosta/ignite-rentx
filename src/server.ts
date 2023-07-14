import express from 'express';

const app = express();
const port = 3335;

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
