import PropTypes from "prop-types";
import {
  Drawer as MUIDrawer,
  List,
  ListItemIcon,
  Icon,
  Divider,
  Box,
} from "@mui/material";
import S from "./styles";
import { HEADER_HEIGHT } from "../../styles/theme";

function Drawer({ items, selectedId, onClickItem }) {
  return (
    <Box display="flex">
      <MUIDrawer variant="permanent" open PaperProps={{sx: {marginTop: HEADER_HEIGHT + 'px'}}}>
        <List>
          {items.map(({ id, icon }) => {
            const selected = id === selectedId;
            return (
              <S.ListItem
                button
                onClick={() => onClickItem(id)}
                key={icon}
                selected={selected}
              >
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <Icon
                    sx={{ color: selected ? "black" : "white" }}
                    fontSize="large"
                  >
                    {icon}
                  </Icon>
                </ListItemIcon>
              </S.ListItem>
            );
          })}
        </List>
      </MUIDrawer>

      <Divider orientation="vertical" color="black" />
    </Box>
  );
}

Drawer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedId: PropTypes.string.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default Drawer;
