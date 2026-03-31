import styled from "@emotion/styled";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const EmployeesCardContainer = styled.div`
  display: flex;
  gap: 64px;
  padding-top: 32px;
`;

export const EmployeesCard = styled.article`
  width: 620px;
  border-radius: 5px;
  padding: 48px;
  background-color: #ffffff;
`;

export const EmployeesDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GroupControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const EmployeesDataLabel = styled.span`
  color: grey;
`;

export const EmployeesData = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonControl = styled.div`
  width: 600px;
  margin-top: 128px;
`;
