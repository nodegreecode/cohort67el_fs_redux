import { v4 } from "uuid";
import {
  PageWrapper,
  EmployeesCardContainer,
  EmployeesCard,
  EmployeesDataWrapper,
  GroupControl,
  EmployeesDataLabel,
  EmployeesData,
  ButtonControl,
} from "./styles.ts";
import Button from "components/Button/Button.tsx";
import { useAppSelector, useAppDispatch } from "store/hooks.ts";
import {
  employeeSliceSelectors,
  employeeSliceActions,
} from "store/Redux/EmployeeSlice/employeeSlice.ts";

export default function Employees() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(employeeSliceSelectors.employees);

  const deleteEmployee = (employeeId: string) => {
    dispatch(employeeSliceActions.removeEmployee(employeeId));
  };

  const deleteAllEmployees = () => {
    dispatch(employeeSliceActions.removeAllEmployees());
  };

  return (
    <PageWrapper>
      {employees.length > 0 && (
        <EmployeesCardContainer>
          {employees.map(e => (
            <EmployeesCard key={v4()}>
              <EmployeesDataWrapper>
                <GroupControl>
                  <EmployeesDataLabel>Name</EmployeesDataLabel>
                  <EmployeesData>{e.name}</EmployeesData>
                </GroupControl>
                <GroupControl>
                  <EmployeesDataLabel>Surname</EmployeesDataLabel>
                  <EmployeesData>{e.surname}</EmployeesData>
                </GroupControl>
                <GroupControl>
                  <EmployeesDataLabel>Age</EmployeesDataLabel>
                  <EmployeesData>{e.age}</EmployeesData>
                </GroupControl>
                <GroupControl>
                  <EmployeesDataLabel>Job Position</EmployeesDataLabel>
                  <EmployeesData>{e.job}</EmployeesData>
                </GroupControl>
                <Button
                  onClick={() => {
                    deleteEmployee(e.id);
                  }}
                  name="Delete"
                  isRed={true}
                />
              </EmployeesDataWrapper>
            </EmployeesCard>
          ))}
        </EmployeesCardContainer>
      )}
      {employees.length > 1 && (
        <ButtonControl>
          <Button
            onClick={deleteAllEmployees}
            name="Remove All Employees"
            isRed={true}
          />
        </ButtonControl>
      )}
    </PageWrapper>
  );
}
