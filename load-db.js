const { insertMultiplesToDB } = require("./services/dbUtils");

const student_details = [
  {
    id: 1,
    name: "Person1",
    total_marks: 90,
  },
  {
    id: 2,
    name: "Person2",
    total_marks: 99,
  },
  {
    id: 3,
    name: "Person3",
    total_marks: 80,
  },
  {
    id: 4,
    name: "Person4",
    total_marks: 70,
  },
  {
    id: 5,
    name: "Person5",
    total_marks: 86,
  },
  {
    id: 6,
    name: "Person6",
    total_marks: 70,
  },
  {
    id: 7,
    name: "Person7",
    total_marks: 90,
  },
  {
    id: 8,
    name: "Person8",
    total_marks: 68,
  },
];

insertMultiplesToDB(student_details);
