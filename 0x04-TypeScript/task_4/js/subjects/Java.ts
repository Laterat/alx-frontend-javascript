



namespace Subjects {
    export interface Teacher{
        exprienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailable(): string{
            if(this.teacher &&this.teacher.experienceTeachingC !== undefined&& this.teacher.experienceTeachingC>0){
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            else{
                return 'No available teacher';
            }
        }
    }
}