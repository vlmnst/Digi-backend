const Startship = require("../Models/startship");
const controllers = {};

controllers.getStartship = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const response = await Startship.findOne({ name });

      if (!response) {
        return res.json({
          status: 404,
          msg: `No startship has that name, try another one. Ex: Death Star`,
        });
      }

      return res.json({
        status: 200,
        msg: `Is this the startship you were looking for?`,
        data: response,
      });
    }

    const response = await Startship.find();

    return res.json({
      status: 200,
      msg: `These are all the startships`,
      data: response,
    });
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
};

module.exports = controllers;
