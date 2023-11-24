const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/getQuestion', (req, res) => res.send({question:`Quel est la couleur du cheval blanc d'Henry 4 ?`, reponse:[`blanc`, `rouge`]}));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));