const courseService = require("../services/courseService");

function createCourse(req, res) {
  const newCourse = courseService.createCourse(req.body);
  res.send(`Curso ${newCourse.name} creado exitosamente ✅`);
}

function listCourses(req, res) {
  const courses = courseService.listCourses();
  res.json(courses);
}

module.exports = { createCourse, listCourses };
