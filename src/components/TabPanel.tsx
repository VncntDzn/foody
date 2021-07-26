import { Typography } from "@material-ui/core";
import { I_Components } from "types/I_Components";
import PropTypes from "prop-types";

const TabPanel = ({
  children,
  value,
  index,
  ...other
}: I_Components.I_TabPanel) => {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
