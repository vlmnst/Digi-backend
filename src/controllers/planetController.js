const Planet = require("../Models/planet");
const controllers = {};

controllers.getPlanet = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const response = await Planet.findOne({ name });

      if (!response) {
        return res.json({
          status: 404,
          msg: `No planet has that name, try another one. Ex: Yavin IV`,
        });
      }

      return res.json({
        status: 200,
        msg: `Is this the planet you were looking for?`,
        data: response,
      });
    }

    const response = await Planet.find();

    return res.json({
      status: 200,
      msg: `These are all the planets`,
      data: response,
    });
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
};

module.exports = controllers;
