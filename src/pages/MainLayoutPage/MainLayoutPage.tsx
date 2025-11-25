import { Outlet } from "react-router";
import { ChildrenContainer, Header, Wrapper } from "./MainLayoutPage.styled";
import { AppBar } from "@mui/material";
import { ThemeToggleSwitch } from "../../ui";

const MainLayoutPage = () => {
  return (
    <Wrapper>
      <AppBar position="static">
        <Header>
          <ThemeToggleSwitch />
        </Header>
      </AppBar>
      <ChildrenContainer>
        <Outlet />
      </ChildrenContainer>
    </Wrapper>
  );
};

export default MainLayoutPage;
