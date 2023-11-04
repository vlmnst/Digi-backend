const Films = require("../Models/films");
const controllers = {};

controllers.getFilms = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const response = await Films.findOne({ name });

      if (!response) {
        return res.json({
          status: 404,
          msg: `No film has that name, try another one. Ex: Darth Vader`,
        });
      }

      return res.json({
        status: 200,
        msg: `Is this the film you were looking for?`,
        data: response,
      });
    }

    const response = await Films.find();

    return res.json({
      status: 200,
      msg: `These are all the films`,
      data: response,
    });
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
};

module.exports = controllers;
