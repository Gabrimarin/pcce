import { Box } from "@mui/material";
import { useState } from "react";
import Drawer from "./components/Drawer";
import { DRAWER_WIDTH } from "./styles/theme";
import ReportRegister from "./pages/ReportRegister";
import Header from "./components/Header";
import Reports from "./pages/Reports";
const getNavigationItem = (id, icon, component) => ({
  id,
  icon,
  component: component || <div />,
});

const navigationItems = [
  getNavigationItem("menu1", "menu_book", <ReportRegister />),
  getNavigationItem("menu2", "face", <Reports />),
  getNavigationItem("menu3", "map"),
  getNavigationItem("menu4", "category"),
  getNavigationItem("menu5", "balance"),
  getNavigationItem("menu6", "account_tree"),
  getNavigationItem("menu7", "summarize"),
  getNavigationItem("menu8", "attach_file"),
  getNavigationItem("menu9", "edit"),
];

function App() {
  const [selected, setSelected] = useState(navigationItems[0].id);

  const handleClickItem = (id) => {
    setSelected(id);
  };

  return (
    <Box>
      <Header />
      <Box marginLeft={DRAWER_WIDTH + "px"}>
        <Drawer
          items={navigationItems}
          onClickItem={handleClickItem}
          selectedId={selected}
        />
        <Box paddingLeft={5} paddingTop={2}>
          {navigationItems.find((item) => item.id === selected).component}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
