const express = require("express");
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/apError");
const errorHandler = require("./utils/errorHandler");

app.use(api, router);

app.use(express.static(path.join(__dirname, "/")));

app.all("*", (req, res, next) => {
  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

module.exports = app;
