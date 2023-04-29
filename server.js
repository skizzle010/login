const express = require("express");
const dotenv = require("dotenv").config("./config.env");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json()) 
app.use('/api/auth', require("./routes/auth"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
  });
