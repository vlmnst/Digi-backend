const People = require("../Models/people");
const controllers = {};

controllers.getPeople = async (req, res) => {
  const { height } = req.query;

  try {
    if (height) {
      const response = await People.find({ height: { $lt: height } });

      if (response.length < 1) {
        const response = await People.find({ height: { $ne: null } }).sort({
          height: 1,
        });

        return res.json({
          status: 200,
          msg: `Enter a number greater than ${
            response[0].height
          } and less than ${response[response.length - 1].height}`,
        });
      }

      return res.json({
        status: 200,
        msg: `These are the characters whose height is less than ${height}`,
        data: response,
      });
    }

    const response = await People.find();

    return res.json({
      status: 200,
      msg: `These are all the characters, if you want apply a filter use ?height=Number`,
      data: response,
    });
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
};

module.exports = controllers;
