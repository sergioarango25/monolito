const courseRepo = require("../repositories/coursesRepo");

function createCourse(course) {
  return courseRepo.addCourse(course);
}

function listCourses() {
  return courseRepo.getAllCourses();
}

module.exports = { createCourse, listCourses };
