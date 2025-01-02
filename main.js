const students = [
            { name: "Ali", rollNo: "101", marks: 85 },
            { name: "Sara", rollNo: "102", marks: 90 },
            { name: "John", rollNo: "103", marks: 75 },
            { name: "Emma", rollNo: "104", marks: 95 }
];

const rollNoInput = prompt("Enter the Roll Number to find the student:");


let studentFound = false;


for (let i = 0; i < students.length; i++) {
     if (students[i].rollNo === rollNoInput){
    alert(`Student Found!\nName: ${students[i].name}\nRoll No: ${students[i].rollNo}\nMarks: ${students[i].marks}`);
    studentFound = true;
    break; }
        }

if (!studentFound) {
alert("Student not found! Please try again.");
}

