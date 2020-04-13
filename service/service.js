const connection = require("../config/connection");

const getBySeason = async (season) => {
  const client = await connection();
  await client.connect();
  try {
    const result = await client
      .db("Friends")
      .collection("Episodes")
      .find({ season: season })
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

const getBySeasonAndEpisode = async (season, episode) => {
  const client = await connection();
  await client.connect();
  try {
    const result = await client
      .db("Friends")
      .collection("Episodes")
      .findOne({ season: season, episode: episode });
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

const getByName = async (name) => {
  const client = await connection();
  await client.connect();
  try {
    const result = await client
      .db("Friends")
      .collection("Episodes")
      .findOne({ name: name });
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

const getByYear = async (year) => {
  const client = await connection();
  await client.connect();
  try {
    const result = await client
      .db("Friends")
      .collection("Episodes")
      .find({ year: year })
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

module.exports = {
  getBySeason,
  getBySeasonAndEpisode,
  getByName,
  getByYear,
};
