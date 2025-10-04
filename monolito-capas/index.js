const express = require("express");
const app = express();
const port = 5004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const studentsRoute = require("./routes/students");
const coursesRoute = require("./routes/courses"); 


app.use("/students", studentsRoute);
app.use("/courses", coursesRoute); 


app.get("/", (req, res) => {
  res.send("Bienvenido a la API de estudiantes y cursos 🚀");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
