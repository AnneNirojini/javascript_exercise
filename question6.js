// create object course
const course = {
  courseName: "BIT",
  courseFee: "Rs 150 000",
  startDate: "12.06.2018",
  center: "Our Office",
};

//output
document.getElementById("course").innerHTML = "Course Name:" + " " + course.courseName + "<br>" +
"Fee:" + " " + course.courseFee + "<br>" +
"Start Date:" + " " + course.startDate + "<br>" +
"center:" + " " + course.center;
