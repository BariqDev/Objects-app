import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container maxWidth='sm'>
      <Outlet />
    </Container>
  );
}

export default App;
