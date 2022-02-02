import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import Drawer from "./components/Drawer";
import { DRAWER_WIDTH } from "./styles/theme";
import ReportRegister from "./pages/ReportRegister";
import Header from "./components/Header";
const getNavigationItem = (id, icon) => ({
  id,
  icon,
});

const navigationItems = [
  getNavigationItem("menu1", "menu_book"),
  getNavigationItem("menu2", "face"),
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
  const filesElement = useRef(null);

  const sendFile = async () => {
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }
    // const res = await fetch(`http://localhost:8080/upload`, {
    //   method: 'POST',
    //   body: dataForm,
    // });
    // const data = await res.json();
    console.log(dataForm);
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
          <ReportRegister />
        </Box>
        <input type="file" multiple ref={filesElement} />
      <button onClick={sendFile}>Send file</button>
      </Box>
    </Box>
  );
}

export default App;
