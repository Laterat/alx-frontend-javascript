

 export interface Student{
    firstName: string,
    lastName: string,
    age:number, 
    location:string
}


const student1: Student={
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
}

const student2: Student={
    firstName: "Kenna",
    lastName: "Chala",
     age: 23,
    location: "Adama"
}

const studentsList =[student1, student2];

const table = document.createElement("table");
const headerRow=document.createElement("tr");

["First Name","Location"].forEach(
    (headerText)=>{
        const header=document.createElement("th");
        header.textContent=headerText;
        headerRow.appendChild(header)
    }
);


table.appendChild(headerRow);

studentsList.forEach(
    (student)=>{
       const row=document.createElement("tr")
       const firstName=document.createElement("td");
        const location=document.createElement("td");
             firstName.textContent= student.firstName;
             location.textContent= student.location;
       row.appendChild(firstName);
       row.appendChild(location)
       table.appendChild(row);
    }
);

document.body.appendChild(table);