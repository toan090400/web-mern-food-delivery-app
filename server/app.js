const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Set app
const app = express();

//1 Middleware
// Set security HTTP headers
app.use(helmet());
// Set cors
app.use(cors());
//react images get

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// 2 handler
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const categoryRouter = require("./routes/categoryRoute");
const userRouter = require("./routes/userRoute");
const billRouter = require("./routes/billRoute");
const reviewRouter = require("./routes/reviewRoute");

// 3 routers
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/categorys", categoryRouter);
app.use("/api/users", userRouter);
app.use("/api/bills", billRouter);
app.use("/api/reviews", reviewRouter);
// 4 server
module.exports = app;
