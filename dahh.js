const displineManagemnt = require("./controller/controller")
const { student } = require("./dp/displine")
const{addStudent,display,findById,findByMany,updateStudent,updateByMany,removeStudent}=displineManagemnt
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
//updateByMany
updateStudent(2,"name","travis scott")

const update = {
    name:"joshua",
    age:18,
    level:"l5sod"
}
updateByMany(1,update)
//remove student
removeStudent(2)