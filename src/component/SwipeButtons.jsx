import React from "react";
import "../component/swipebuttons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import StarRateIcon from "@mui/icons-material/StarRate";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

function SwipeButtons() {
  return (
    <div className="swipeButton">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
