const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/user.routes");
const carRoutes = require("./routes/car.routes");
const cookieParser = require("cookie-parser");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");


require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const cors = require("cors");
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());  

// jwt   
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
}); 

// routes
app.use("/api/user", userRoutes);
app.use("/api/car", carRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);  
});  
  