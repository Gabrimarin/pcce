import { ListItem } from "@mui/material";
import { styled } from "@mui/system";
import { DRAWER_WIDTH } from "../../styles/theme";

const _ListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ selected }) => ({
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
  marginTop: 2,
  border: selected ? '1px solid #000' : 'none',
  borderRightWidth: 0,
  height: DRAWER_WIDTH,
  width: DRAWER_WIDTH,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: selected ? "white" : "#777",
  ":hover": {
    backgroundColor: selected ? "#eee" : "#555",
  },
}));

const styleds = {
  ListItem: _ListItem,
};

export default styleds;
