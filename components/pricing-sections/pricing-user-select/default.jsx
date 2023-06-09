import React, { useEffect } from "react";
import classnames from "classnames/bind";
import Image from "next/image";

import * as styles from "./pricing-user-select.module.scss";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
} from "@mui/material";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import dialogScreenshot from "../../../public/images/testrail-users.png";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MuiDialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const cx = classnames.bind(styles);

const PrettoSlider = styled(Slider)({
  color: "#303fe1",
  height: 8,
  marginBottom: "0px",
  paddingBottom: "2rem",
  "& .MuiSlider-track": {
    border: "none",
  },
  "&. MuiSlider-markLabel": {
    left: "-0.5rem",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-mark": {
    display: "none",
  },

  "& .MuiSlider-markLabel": {
    color: "white",
    fontSize: "1rem",
    marginTop: "0.5rem",
  },
});

const marks = [
  {
    value: 2,
    label: "20 TestRail User",
  },
  {
    value: 50,
    label: "500 TestRail Users",
  },
  {
    value: 100,
    label: "1000 TestRail Users",
  },
];

function valueLabelFormat(value) {
  return `${value * 10}`;
}

const PricingUserSelect = ({ userIndex, userTiers, setUserIndex, small }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  useEffect(() => {
    setUserIndex(userIndex);
  });

  const handleChange = (event) => {
    setUserIndex(Number(event.target.value) / 2);
  };

  const handleUserSelectClick = (type) => {
    if (type === "plus") {
      if (userIndex >= userTiers.length / 2 + 1) return;
      setUserIndex(userIndex + 0.5);
    }
    if (type === "minus") {
      if (userIndex <= 0) return;
      setUserIndex(userIndex - 0.5);
    }
  };

  return (
    <div className={cx("pricingUserSelect")}>
      <Dialog onClose={() => setDialogOpen(false)} open={isDialogOpen}>
        <MuiDialogTitle>
          <Typography variant="h6">How to calculate TestRail Users</Typography>
          <IconButton
            aria-label="close"
            className={cx("pricingUserSelect_dialogCloseIcon")}
            onClick={() => setDialogOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <DialogContent>
          <DialogContentText>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "12px",
              }}
            >
              The number of TestRail user can be found by navigating to TestRail
              Administration {">"} License {">"} Named Users
            </div>
          </DialogContentText>
          <div className={cx("pricingUserSelect_dialogImage")}>
            <Image alt="dialog-screenshot" src={dialogScreenshot} />
          </div>
        </DialogContent>
      </Dialog>

      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "0.5rem",
        }}
      >
        <div style={{width: "100%", display: "flex" }}>
          <IconButton
            aria-label="remove"
            className={cx("pricingUserSelect_button", {
              pricingUserSelect_buttonActive: userIndex !== 0,
            })}
            onClick={() => handleUserSelectClick("minus")}
            disabled={userIndex <= 1}
            style={{ marginRight: "0.5rem" }}
          >
            <RemoveCircleOutlinedIcon />
          </IconButton>

          <PrettoSlider
            aria-label="Custom marks"
            value={userIndex * 2}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            step={1}
            valueLabelDisplay="on"
            onChange={handleChange}
            marks={marks}
            min={2}
          />
          <IconButton
            aria-label="add"
            onClick={() => handleUserSelectClick("plus")}
            className={cx("pricingUserSelect_button", {
              pricingUserSelect_buttonActive: !(
                userIndex >=
                userTiers.length / 2
              ),
            })}
            style={{ marginLeft: "0.5rem" }}
            disabled={userIndex >= userTiers.length / 2}
          >
            <AddCircleOutlinedIcon />
          </IconButton>
        </div>
        <IconButton
          aria-label="help"
          size="small"
          onClick={() => setDialogOpen(true)}
          className={cx("pricingUserSelect_helpButton")}
          style={{ padding: "0" }}
        >
          <HelpOutlineOutlinedIcon
            className={cx("pricingUserSelect_helpIcon")}
            style={{ margin: "0" }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default PricingUserSelect;
