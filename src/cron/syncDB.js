const axios = require("axios");
const resourcesParams = require("./resourceParams");


const syncModel = async (resourceInUse) => {
  let countDataBase = 0;
  let code;
  let countApi = 0;
  let url = process.env.API_URL + resourceInUse.url;

  while (countDataBase <= countApi) {
    if (url) {
      try {
        const {
          status,
          data: { next, results, count },
        } = await axios(url);

        results.map(async (item) => {
          const res = await resourceInUse.model.findOne({
            [resourceInUse.findOneKey]: item[resourceInUse.findOneKey],
          });
          if (res) return;

          const newData = resourceInUse.model(item);
          await newData.save();
        });

        url = next;

        countDataBase = await resourceInUse.model.countDocuments();

        countApi = count;

        code = status;
      } catch (error) {
        console.log(error);
      }
    }

    if (!url) countApi--;
  }
};

const syncDB = async() => {
    const results = resourcesParams.map( (item) => {
        return syncModel(item)
    })

    await Promise.all(results)
}

module.exports = syncDB;
