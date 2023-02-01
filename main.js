function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let studentsArr = [
  {name: "David"},
  {name: "Max"},
  {name: "Nela"},
  {name: "Mario"},
  {name: "Emilia"}
]

function join(students) {
  students.map((el) => {
    el.academy = "Develhope";
  })
}

join(studentsArr);
console.log(studentsArr);

function exam(students){
  students.forEach((el) => {
    el.grade = getRandomNumber(1, 10)
  })
}

function year(students){
  students.forEach((el) =>{
    el.year = getRandomNumber(1, 3)
  })
}


function graduate(students) {
  let result = [""]
  result = students.filter((el) =>{
   return el.grade >= 6;
  })
  return result
}

function studentLevels(students) {
  return students.map((st) => {
    if (st.grade >= 6 && st.grade < 7){
      return st.name + " Average";
    }
    else if(st.grade >= 7 && st.grade <8){
      return st.name + " Above Average";
    }
    else if(st.grade >= 8 && st.grade <= 10){
      return st.name + " Great";
    }
    else{
      return st.name + " Failed"
    }
  })
}

function failedStudents(students) {
  let result = [];
  result = students.filter((st) => {
    if (st.grade < 5) {
      return st;
    }
  });
  return result;
}


exam(studentsArr);
year(studentsArr);
let graduated = graduate(studentsArr);
console.log(graduated);
console.log(studentsArr);
let levels = studentLevels(studentsArr);
console.log(levels);
let failedst = failedStudents(studentsArr);
console.log(failedst);

