export enum EMPLOYEE_FORM_VALUES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  JOB = "job",
}

export interface EmployeeFormValues {
  name: string;
  surname: string;
  age: string;
  job: string;
  id: string;
}
