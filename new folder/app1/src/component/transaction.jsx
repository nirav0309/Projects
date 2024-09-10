import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Stack, Typography } from "@mui/material";
const Transaction = () => {
  return (
    <Stack
      sx={{
        minHeight: "40vh",
        background: "#C8E9FF",
        margin: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <ErrorOutlineIcon />
        <Box >
          <Typography>No Transaction</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Transaction;
