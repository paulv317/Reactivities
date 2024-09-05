import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
  handleFormOpen: () => void;
}

const NavBar = ({ handleFormOpen }: Props) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "24px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activity" onClick={handleFormOpen} />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
