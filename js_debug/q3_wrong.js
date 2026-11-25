const calculateGrade = (name, marks) => {
  let grade = "";
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 40) {
    grade = "C";
  } else {
    grade = "Fail";
  }
  console.log("Student: " + name);
  console.log("Marks: " + marks);
  console.log("Grade: " + grade);
  return grade;
}
const student1 = calculateGrade("Ram", 85);
const student2 = calculateGrade("Sita", 55);
console.log("Final Grade: " + student1;
console.log("Final Grade: " + student2);


// has SyntaxError