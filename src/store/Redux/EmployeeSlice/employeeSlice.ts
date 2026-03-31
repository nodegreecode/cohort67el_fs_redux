import { createAppSlice } from "store/createAppSlice";
import { type PayloadAction } from "@reduxjs/toolkit";
import { type EmployeeInitialState, type EmployeeData } from "./types.ts";

const initialState: EmployeeInitialState = { employeeData: [] };

export const employeeSlice = createAppSlice({
  name: "EMPLOYEE",
  initialState: initialState,
  reducers: {
    addEmployee: (sliceState, action: PayloadAction<EmployeeData>) => {
      sliceState.employeeData = [...sliceState.employeeData, action.payload];
    },
    removeEmployee: (sliceState, action: PayloadAction<string>) => {
      sliceState.employeeData = [
        ...sliceState.employeeData.filter(e => e.id !== action.payload),
      ];
    },
    removeAllEmployees: (sliceState: EmployeeInitialState) => {
      sliceState.employeeData = [];
    },
  },
  selectors: {
    employees: sliceState => sliceState.employeeData,
  },
});

export const employeeSliceActions = employeeSlice.actions;
export const employeeSliceSelectors = employeeSlice.selectors;
