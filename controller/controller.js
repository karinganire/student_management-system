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
    var founderStudent ={}
    foundedStudent = student.filter(foundedStudent => foundedStudent.age === age) 
}

//updateUsers
const updateStudent= (id,key,value) =>{
    var studentExist={}
    studentExist = student.find(studentExist => studentExist.id=== id)
    console.log(".........update student...........");
    

    if (!studentExist){
        console.log("student don't exist");
    }
    else{
        studentExist[key] =value
        console.log("student updated");
        console.log(studentExist);
    }
}

    const updateByMany = (id,object) =>{
        var studentExist={}
        studentExist = student.find(studentExist => studentExist.id ===id)
        console.log("..........update by many...........");
        if(!studentExist){
            console.log("user don't exist");
        
        }else{
            for (key in object){
                studentExist[key]= object[key]
            }
            console.log("student updated");
            console.log(studentExist)
        }
    }
    const removeStudent = (id)=>{
        var studentExist={}
        studentExist = student.find(studentExist => studentExist.id===id)
        console.log(".......remove student.......")
        if(!studentExist){
            console.log("student you want to dellete don't exist");
        }else{
            var remmaingStudent= []
            remmaingStudent= student.filter(remmaingStudent=> remmaingStudent.id !==id)
            console.log("user removed");
            console.log(remmaingStudent);
        }
    }

module.exports={
    addStudent,
    display,
    findById,
    findByMany,
    updateStudent,
    updateByMany,
    removeStudent
}
