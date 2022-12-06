const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:jayvee@cluster0.lzinbup.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("Mongo DB connection ready!");
});

mongoose.connection.on("error0", (error) => {
  console.error(error);
});

async function mongoCOnnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoCOnnect,
  mongoDisconnect,
};
