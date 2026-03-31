import {createContext} from "react";
import {type EmployeeDataContext} from "./types.ts";

export const MainContext = createContext<EmployeeDataContext>({
  employeeData: [],
  fetchEmployeeData: () => {},
});
