import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "black", color: "white", p: "2" }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg: hover": {
              color: "aqua",
              transform: "translatex(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons show in footer */}
          <InstagramIcon />
          <GitHubIcon />
        </Box>

        <Typography
          variant="h5"
          sx={{
            "@media(max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          all Rights reserved bytebillion software enginner private limited
          &copy;
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
