const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
