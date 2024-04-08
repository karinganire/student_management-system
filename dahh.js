const displineManagemnt = require("./controller/controller")
const{addStudent,display,findById,findByMany}=displineManagemnt
// add new student
let newStudent={
    name:'samy',
    Age:12
}
let newStudents={
    name:"tony scott",
    Age:22
}
addStudent(newStudent)
addStudent(newStudents)
// display

display()

// find by id

findByMany(27)