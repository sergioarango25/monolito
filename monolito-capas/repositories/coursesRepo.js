let courses = [];

function addCourse(course) {
  courses.push(course);
  return course;
}

function getAllCourses() {
  return courses;
}

module.exports = { addCourse, getAllCourses };
