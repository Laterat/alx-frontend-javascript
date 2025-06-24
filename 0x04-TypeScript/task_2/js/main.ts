

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