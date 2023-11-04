const People = require("../Models/people");
const controllers = {};

controllers.getPeople = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const response = await People.find({ name });

      if (response.length < 1) {
        return res.json({
          status: 200,
          msg: `No character has that name, try another one. Ex: Darth Vader`,
        });
      }

      return res.json({
        status: 200,
        msg: `Is this the character you were looking for?`,
        data: response,
      });
    }

    const response = await People.find();

    return res.json({
      status: 200,
      msg: `These are all the characters`,
      data: response,
    });
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
};

module.exports = controllers;
