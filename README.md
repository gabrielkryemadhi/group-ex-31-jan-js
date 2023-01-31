
Start working in the main.js file.

Create an array of five students. A student object will look like this:
{
    name: "Name here",
}

Make a join(students) function, which will go through all the students, and add the property academy: "Develhope" to the objects.
Console.log all the students after this.

Make a function called exam(students) which will go through all the students, and give them a random grade from 1-10.

Make a function called year(students) which will go through all the students, and give them a random year from 1-3.

Make a function called graduate(students) that returns all students that have a score of 6 or higher.

Make a function called studentLevels(students) that returns an array that looks like this: ["Failed", "Average", "Above Average", "Great"], where each string is decided if their grade is: 5 - > Failed 6 -> Average 7 - 8 -> Above Average 9 - 10 -> Great.

Make a function called failedStudents that returns all students that failed, with a grade less than 5.

A student object, in the end after all the operations, will look like this:
{
    name: "Name here",
    year: "1, 2 or 3",
    grade: "1-10",
    academy: "Develhope"
}