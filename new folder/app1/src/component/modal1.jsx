import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

const MyModal1 = () => {
  return (
    <Box>
      <Box>
        <Typography>Go Program Terms</Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          width: "539px",
          height: "218px",
          background: "grey",
          margin: "35px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "roboto",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "19.6px",
            padding: "15px",
          }}
        >
          Program use
        </Typography>
      </Box>
    </Box>
  );
};

export default MyModal1;
