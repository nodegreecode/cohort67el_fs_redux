export interface EmployeeData {
  name: string;
  surname: string;
  age: string;
  job: string;
  id: string;
}

export interface EmployeeInitialState {
  employeeData: EmployeeData[];
}
