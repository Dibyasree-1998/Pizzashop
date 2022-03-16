const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  const connect = "mongodb+srv://Tuapizza:Happy@1998@cluster0.z0k3s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  try {
    const url = process.env.MONGO_URI || connect;
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
