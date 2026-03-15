const students = {
"1001":{
name:"Rahul Sharma",
marks:{
Math:85,
Science:78,
English:90,
Social:74
}
},

"1002":{
name:"Anita Verma",
marks:{
Math:45,
Science:50,
English:48,
Social:42
}
},

"1003":{
name:"Kiran Kumar",
marks:{
Math:92,
Science:88,
English:84,
Social:91
}
}
};

function checkResult(){

const hallTicket = document.getElementById("hallTicket").value.trim();
const resultDiv = document.getElementById("result");

if(students[hallTicket]){

const student = students[hallTicket];
const marks = student.marks;

let total = 0;
let subjects = "";

for(let subject in marks){
subjects += `<tr>
<td>${subject}</td>
<td>${marks[subject]}</td>
</tr>`;
total += marks[subject];
}

const percentage = (total / (Object.keys(marks).length * 100)) * 100;

let grade = "";
if(percentage >= 90) grade="A+";
else if(percentage >= 75) grade="A";
else if(percentage >= 60) grade="B";
else if(percentage >= 50) grade="C";
else grade="F";

const status = percentage >= 50 ? "Pass" : "Fail";
const statusClass = percentage >= 50 ? "pass" : "fail";

resultDiv.innerHTML = `
<div class="result-card">

<p><strong>Name:</strong> ${student.name}</p>
<p><strong>Hall Ticket:</strong> ${hallTicket}</p>

<table>
<tr>
<th>Subject</th>
<th>Marks</th>
</tr>
${subjects}
</table>

<p><strong>Total Marks:</strong> ${total}</p>
<p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
<p><strong>Grade:</strong> ${grade}</p>
<p class="${statusClass}"><strong>Status:</strong> ${status}</p>

</div>
`;

}else{

resultDiv.innerHTML = `<p class="not-found">Result Not Found</p>`;

}

}