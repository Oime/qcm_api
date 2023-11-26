const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API OK'));

app.get('/getQuestions', (req, res) => {
  console.log("/getQuestions");
  const sujet = req.query.sujet;

  if (sujet === "ps_nbr") {
    res.send([
      { question:`Quel est le nombre de côté d'un carré ?`, reponses:[`2`, `3`, `4`, `5`], reponse: `4` },
      { question:`Quel est la couleur du cheval blanc d'Henry 4 ?`, reponses:[`blanc`, `rouge`], reponse: `blanc` }
    ]);
  } else if (sujet === "ps_coul") {
    res.send([
      { question:`Couleur ?`, reponses:[`2`, `3`, `4`, `5`], reponse: `4` },
      { question:`Quel est la couleur du cheval blanc d'Henry 4 ?`, reponses:[`blanc`, `rouge`], reponse: `blanc` }
    ]);
  } else if (sujet === "cp_math_add") {
    res.send([
      { question:`Quel est le nombre de côté d'un carré ?`, reponses:[`2`, `3`, `4`, `5`], reponse: `4` },
      { question:`Quel est la couleur du cheval blanc d'Henry 4 ?`, reponses:[`blanc`, `rouge`], reponse: `blanc` }
    ]);
  } else if (sujet === "CE2_fr_tps") {
    res.send([
      { question:`Quel est le nombre de côté d'un carré ?`, reponses:[`2`, `3`, `4`, `5`], reponse: `4` },
      { question:`Quel est la couleur du cheval blanc d'Henry 4 ?`, reponses:[`blanc`, `rouge`], reponse: `blanc` }
    ]);
  }
});

app.get('/getSujets', (req, res) => {
  console.log("/getSujets");
  res.send([
    { nom:`PS : Je découvre les nombres`, code:`ps_nbr` },
    { nom:`PS : Je découvre les couleurs`, code:`ps_coul` },
    { nom:`CP : Math - Les additions`, code:`cp_math_add` },
    { nom:`CE2 : Français - Les temps`, code:`CE2_fr_tps` },
  ]);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));