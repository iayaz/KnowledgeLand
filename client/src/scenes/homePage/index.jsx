import Navbar from "src/components/Navbar";
import { Box } from "@mui/material";
import Cards from "./Cards";

const HomePage = () => {
  return (
    <Box>
      <Navbar style={{ position: "fixed", width: "100%", zIndex: 1000 }} />
      <Box mt={5}>
        <Cards />
      </Box>
    </Box>
  );
};

export default HomePage;
