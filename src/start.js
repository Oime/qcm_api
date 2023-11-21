const express = require('express');
const app = express();
const port = 3000;

// Endpoint simple
app.get('/', (req, res) => {
    res.send('Bienvenue sur votre API !');
});

// Écoute du port
app.listen(port, () => {
    console.log(`L'API est disponible sur http://localhost:${port}`);
});