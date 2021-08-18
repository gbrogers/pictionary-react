const words = require("../db.json");

module.exports = {
  getWords: (req, res) => {
    console.log(req);
    const { difficulty } = req.params;
    let wordArray = [];
    words.map((item) => {
      if (item.difficulty === difficulty) {
        wordArray.push(item.word);
      }
      let oneWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    });
    return res.status(200).send(oneWord);
  },
};
