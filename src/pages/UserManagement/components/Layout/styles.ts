import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps, Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;

  padding: 20px 40px;
  color: white;
`;

export const Logo = styled.div`
  height: 100%;
  width: 80px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 24px;
  font-weight: normal;
  text-decoration: none;
  color: rgb(17, 34, 51);
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
  background-color: rgb(17, 34, 51);
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 150px;
  //border-top: 1px solid black;
  background-color: rgb(75, 75, 75);
  padding: 20px 40px;
  color: white;
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const getActiveStyles = ({isActive}:NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});
