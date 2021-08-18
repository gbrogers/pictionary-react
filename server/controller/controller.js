const words = require("../db.json");

module.exports = {
  getWords: (req, res) => {
    console.log(req);
    const { id } = req.params;
    const rightWords = words.filter((item) => {
      item.difficulty === id;
    });
    res.status(200).send(rightWords);
  },
};
