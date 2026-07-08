import { app } from './app';

const port = 3335;

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
