import { Box } from "@mui/material";
import theme, { HEADER_HEIGHT } from "../../styles/theme";

function Header() {
  return <Box sx={{w: '100%'}} bgcolor={theme.palette.primary.main} height={HEADER_HEIGHT}>

  </Box>;
}

export default Header;
