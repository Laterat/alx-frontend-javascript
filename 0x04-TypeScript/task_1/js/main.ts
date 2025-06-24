

export interface Teacher{
    readonly  firstNAme: string,
   readonly   lastName: string,
    fullTimeEmployee: boolean,
    yearOfExperience ?: number,
    location: string,
    [key: string]: any;
}