import { v4 } from "uuid";
import { useFormik } from "formik";
import { validationSchema } from "./schema.ts";
import { EMPLOYEE_FORM_VALUES, type EmployeeFormValues } from "./types.ts";
import { PageWrapper, EmployeeFormWrapper, EmployeeForm } from "./styles.ts";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";
import { useAppDispatch } from "store/hooks.ts";
import { employeeSliceActions } from "store/Redux/EmployeeSlice/employeeSlice.ts";

export default function Employee() {
  const dispatch = useAppDispatch();

  const formik = useFormik<EmployeeFormValues>({
    initialValues: {
      [EMPLOYEE_FORM_VALUES.NAME]: "",
      [EMPLOYEE_FORM_VALUES.SURNAME]: "",
      [EMPLOYEE_FORM_VALUES.AGE]: "",
      [EMPLOYEE_FORM_VALUES.JOB]: "",
      id: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, formikHelpers) => {
      dispatch(employeeSliceActions.addEmployee({ ...values, id: v4() }));
      formikHelpers.resetForm();
    },
  });
  return (
    <PageWrapper>
      <EmployeeFormWrapper>
        <EmployeeForm onSubmit={formik.handleSubmit}>
          <Input
            id={v4()}
            name="name"
            label="Name"
            value={formik.values[EMPLOYEE_FORM_VALUES.NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.NAME]}
            isRequired={true}
            placeholder="Please enter your name"
          />
          <Input
            id={v4()}
            name="surname"
            label="Surname"
            value={formik.values[EMPLOYEE_FORM_VALUES.SURNAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.SURNAME]}
            isRequired={true}
            placeholder="Please enter your surname"
          />
          <Input
            id={v4()}
            name="age"
            label="Age"
            value={formik.values[EMPLOYEE_FORM_VALUES.AGE]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.AGE]}
            isRequired={true}
            placeholder="Please enter your age"
          />
          <Input
            id={v4()}
            name="job"
            label="Job Position"
            value={formik.values[EMPLOYEE_FORM_VALUES.JOB]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.JOB]}
            placeholder="Please enter your job position"
          />
          <Button type="submit" name="Create" />
        </EmployeeForm>
      </EmployeeFormWrapper>
    </PageWrapper>
  );
}
