export class Employee{
    id?: number;
    name ="";
    surName ="";
    birthDate ="";
    phone ="";
    position: Position=Position.Physical;   
}
export enum Position {
    Physical = "Physical" ,
    Manager = "Manager",
    Developer = "Developer"
  }
