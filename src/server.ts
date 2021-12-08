import express from 'express';

const app = express();
const port = 3500;

const middleware = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};


// main route
app.get('/', [middleware, middleware] ,(req, res) => {
    res.status(200).send({
      message: 'Welcome to the EXPRESS API',
      date: new Date(),
    });
});

app.get('/users', [middleware, middleware], (req, res) => {
  res.status(200).send([
    {
      id: 1,
      name: 'Israel Cm',
    },
    {
      id: 2,
      name: 'Juan Macias',
    }
  ]);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
