const express = require('express');
const { shuffleArray } = require('./utils');

const app = express();

app.get('/', (req, res) => res.send('API OK'));

app.get('/getQuestions', (req, res) => {
  console.log("/getQuestions");
  const sujet = req.query.sujet;

  if (sujet === "ps_nbr") {
    res.send([
      { question:`Quel est le nombre de côté d'un carré ?`, typeRep:`btn`, reponses:[`2`, `3`, `4`, `5`], reponse: `4` },
      { question:`Quel est la couleur du cheval blanc d'Henry 4 ?`, typeRep:`btn`, reponses:[`blanc`, `rouge`], reponse: `blanc` }
    ]);
  } else if (sujet === "ps_coul") {
    res.send([
      { question:`Couleur ?`, typeRep:`btn`, reponses:[`2`, `3`, `4`, `5`], reponse: `4` },
      { question:`Quel est la couleur du cheval blanc d'Henry 4 ?`, typeRep:`btn`, reponses:[`blanc`, `rouge`], reponse: `blanc` }
    ]);
  } else if (sujet === "gs_monde") {
    res.send([
      { question:`Quel direction montre le haut ?`, typeRep:`btn`, reponses:[`→`, `↓`, `←`, `↑`], reponse: `↑` },
      { question:`Quel direction montre le bas ?`, typeRep:`btn`, reponses:[`→`, `↓`, `←`, `↑`], reponse: `↓` },
      { question:`Quel direction montre la gauche ?`, typeRep:`btn`, reponses:[`→`, `↓`, `←`, `↑`], reponse: `←` },
      { question:`Quel direction montre la droite ?`, typeRep:`btn`, reponses:[`→`, `↓`, `←`, `↑`], reponse: `→` },
    ]);
  } else if (sujet === "cp_math_add") {
    let questions = [
      { question:`6 + 8 =`, typeRep:`nbr`, reponse: `14` },
      { question:`13 + 8 =`, typeRep:`nbr`, reponse: `21` },
      { question:`4 + 18 =`, typeRep:`nbr`, reponse: `22` },
      { question:`6 + 21 =`, typeRep:`nbr`, reponse: `27` },
      { question:`11 + 11 =`, typeRep:`nbr`, reponse: `22` },
      { question:`9 + 3 + 4 =`, typeRep:`nbr`, reponse: `16` },
      { question:`23 + 6 =`, typeRep:`nbr`, reponse: `29` },
      { question:`9 + 9 =`, typeRep:`nbr`, reponse: `18` },
      { question:`15 + 9 =`, typeRep:`nbr`, reponse: `24` },
      { question:`8 + 8 + 7 =`, typeRep:`nbr`, reponse: `23` },
    ];
    questions = shuffleArray(questions);
    res.send(questions);
  } else if (sujet === "cp_math_sou") {
    res.send([
      { question:`16 - 8 =`, typeRep:`nbr`, reponse: `8` },
      { question:`13 - 11 =`, typeRep:`nbr`, reponse: `2` },
      { question:`21 - 9 =`, typeRep:`nbr`, reponse: `12` },
      { question:`18 - 15 =`, typeRep:`nbr`, reponse: `3` },
      { question:`23 - 13 =`, typeRep:`nbr`, reponse: `22` },
      { question:`53 - 53 =`, typeRep:`nbr`, reponse: `0` },
      { question:`18 - 8 =`, typeRep:`nbr`, reponse: `5` },
      { question:`19 - 10 =`, typeRep:`nbr`, reponse: `9` },
      { question:`9 - 6 =`, typeRep:`nbr`, reponse: `3` },
      { question:`20 - 10 =`, typeRep:`nbr`, reponse: `10` },
    ]);
  } else if (sujet === "CE2_fr_tps") {
    res.send([
      { question:`Quel est le nombre de côté d'un carré ?`, typeRep:`btn`, reponses:[`2`, `3`, `4`, `5`], reponse: `4` },
      { question:`Quel est la couleur du cheval blanc d'Henry 4 ?`, typeRep:`btn`, reponses:[`blanc`, `rouge`], reponse: `blanc` }
    ]);
  }
});

app.get('/getSujets', (req, res) => {
  console.log("/getSujets");
  res.send([
    { nom:`PS : Je découvre les nombres`, code:`ps_nbr` },
    { nom:`PS : Je découvre les couleurs`, code:`ps_coul` },
    { nom:`GS : Je découvre le monde`, code:`gs_monde` },
    { nom:`CP : Math - Les additions`, code:`cp_math_add` },
    { nom:`CP : Math - Les soustractions`, code:`cp_math_sou` },
    { nom:`CE2 : Français - Les temps`, code:`CE2_fr_tps` },
  ]);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));