const {student} = require("../dp/displine")

const addStudent = (newStudent) =>{
    newStudent.id = (student.length) +1
    student.push(newStudent)
    console.log("----add new students-----");
    console.log(student);
}

// function to display all students
const display = () => {

    console.log("-----display all students----");
    console.log(student);
}
// fuction that find any student by id
const findById = (id) =>{
    var foundedStudent ={}
    foundedStudent = student .find(foundedStudent =>foundedStudent.id === id)

    if (!foundedStudent) {
        console.log("student doesn't exist ");
    } else {
    console.log("foundedStudent");
        
    }
    console.log("----display founded student----");
}
//find by age
const findByMany =(age) =>{
    var founderUser ={}
    foundedUser = user.filter(foundedUser => foundedUser.age === age) 
}
module.exports={
    addStudent,
    display,
    findById,
    findByMany
}
