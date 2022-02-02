import { Typography } from '@mui/material';
import Proptypes from 'prop-types';

function HeaderTitle({ children }) {
  return <Typography variant="h4">{children}</Typography>
}

HeaderTitle.propTypes = {
  children: Proptypes.string.isRequired,
};

export default HeaderTitle;
