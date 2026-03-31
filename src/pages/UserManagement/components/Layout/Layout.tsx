import {
  Footer,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
  Header,
  HeaderLink,
  LayoutWrapper,
  Logo,
  LogoImg,
  Main,
  NavigationContainer,
} from "pages/UserManagement/components/Layout/styles.ts";
import terraform from "assets/icons/Terraform-Icon--Streamline-Svg-Logos.svg";
import { useState } from "react";
import { MainContext } from "./context.ts";
import { type EmployeeData, type LayoutProps } from "./types.ts";

export default function Layout({ children }: LayoutProps) {
  const [employeeData, setEmployeeData] = useState<EmployeeData[]>([]);
  return (
    <MainContext.Provider
      value={{ employeeData: employeeData, fetchEmployeeData: setEmployeeData }}
    >
      <LayoutWrapper>
        <Header>
          <Logo>
            <LogoImg src={terraform} alt="Logo" />
          </Logo>
          <NavigationContainer>
            <HeaderLink style={getActiveStyles} to="/createEmployee">
              Create Employee
            </HeaderLink>
            <HeaderLink style={getActiveStyles} to="/employees">
              Employees
            </HeaderLink>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <FooterNavigation>
            <FooterLink to="/createEmployee">Create Employee</FooterLink>
            <FooterLink to="/employees">Employees</FooterLink>
          </FooterNavigation>
        </Footer>
      </LayoutWrapper>
    </MainContext.Provider>
  );
}
