import express from "express";
const app = express();
const PORT = 3000;

app.get("/",(req,res) => {
  res.send("Hello World");
});

app.get("/students",(req,res) => {
  res.send("Get all students");
});

app.get("/students/1",(req,res) => {
  res.send("Get student ID 1");
});

app.post("/students",(req,res) => {
  res.send("Hello World");
});

app.put("/students/1",(req,res) => {
  res.send("Student ID 1 updated");
});

app.patch("/students/1",(req,res) => {
  res.send("Student ID 1 partially updated");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
