

export interface Teacher{
    readonly  firstNAme: string,
   readonly   lastName: string,
    fullTimeEmployee: boolean,
    yearOfExperience ?: number,
    location: string,
    [key: string]: any;
}

interface Directors extends Teacher{
    numberOfReports: number,
}


interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher:printTeacherFunction=(firstName, lastName)=> {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassInterface {
    firstName:string,
    lastName:string,
    workOnHomework(): string,
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        }

    workOnHomework (){
        return 'Currently working';
    }
    displayName(): string {
        return `${this.firstName}`;
    }
}