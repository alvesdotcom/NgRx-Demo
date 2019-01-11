export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Unknown = 'Unkown'
}

export interface Person {
    name: string;
    age: number;
    gender: Gender;
}

export interface Filter extends Person {
}