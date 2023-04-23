const AppError = require("../utils/apError");
const conn = require("../services/db");

exports.getAllProjects = (req, res, next) => {
  conn.query("SELECT * FROM projects", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createProject = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const values = [req.body.PROJECT_NAME, "pending"];
  conn.query(
    "INSERT INTO projects (PROJECT_NAME, TECH-USED, IMAGE, PROJECT_DESCRIPTION, GITHUB_LINK) VALUES(?)",
    [values],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "project created!",
      });
    }
  );
};

exports.getProject = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No project id found", 404));
  }
  conn.query(
    "SELECT * FROM projects WHERE id = ?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

exports.updateProject = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No project id found", 404));
  }
  conn.query(
    "UPDATE project SET status='completed' WHERE id=?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "project updated!",
      });
    }
  );
};

exports.deleteProject = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No project id found", 404));
  }
  conn.query(
    "DELETE FROM projects WHERE id=?",
    [req.params.id],
    function (err, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "project deleted!",
      });
    }
  );
};
