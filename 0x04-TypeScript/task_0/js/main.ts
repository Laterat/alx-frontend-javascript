

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
table.style.border = "1px solid black";

const headerRow=document.createElement("tr");

["First Name","Location"].forEach(
    (headerText)=>{
        const header=document.createElement("th");
        header.textContent=headerText;
        header.style.border = "1px solid black";
        header.style.padding = "4px";
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
         firstName.style.border = "1px solid black";
         firstName.style.padding = "4px";
             location.textContent= student.location;
        location.style.border = "1px solid black";
        location.style.padding = "4px";
       row.appendChild(firstName);
       row.appendChild(location)
       table.appendChild(row);
    }
);

document.body.appendChild(table);