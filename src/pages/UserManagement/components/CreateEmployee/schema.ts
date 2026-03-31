import * as Yup from "yup";
import { EMPLOYEE_FORM_VALUES } from "./types.ts";

export const validationSchema = Yup.object().shape({
  [EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
    .required("Name field is required")
    .min(2, "Name field should contain min 2 characters")
    .max(50, "Name field should contain max 50 characters"),
  [EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
    .required("Surname field is required")
    .max(15, "Surname field should contain max 50 characters"),
  [EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
    .required("Age field is required")
    .min(1, "Age field should contain min 1 characters")
    .max(3, "Age field should contain max 3 characters"),
  [EMPLOYEE_FORM_VALUES.JOB]: Yup.string().max(
    30,
    "Job Position field should contain max 30 characters",
  ),
});