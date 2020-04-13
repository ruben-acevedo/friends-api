const { MongoClient } = require("mongodb");

const connection = async () => {
  const client = new MongoClient(
    "HiddenUri", // here I insert my mongodb uri, hidden for security reasons
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client;
};

module.exports = connection;
