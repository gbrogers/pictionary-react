const words = require("../db.json");

module.exports = {
  getWords: (req, res) => {
    console.log(req);
    const { difficulty } = req.params;
    const rightWords = words.filter((item) => {
      item.difficulty === difficulty;
    });
    return res.status(200).send(rightWords);
  },
};
