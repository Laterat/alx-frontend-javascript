

interface DirectorInterface {
    workFromHome(): string,
    getCofffeeBreak(): string,
    workDirectorTasks():string,
}

interface TeacherInterface {
    workFromHome(): string,
    getCofffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface{

    workFromHome(): string{
        return 'Working from home';
    }
    getCofffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface{

    workFromHome(): string{
        return 'Cannot work from home';
    }
    getCofffeeBreak(): string{
        return 'cannot have a break'
    }
    workTeacherTasks(): string{
        return 'Getting to work';
    }
}


function createEmployee(salary: number | string) {
   if(typeof salary== "number" && salary < 500){
        return new Teacher();
    }
    else{
        return new Director();
    }
}

function isDirector(employee : DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}