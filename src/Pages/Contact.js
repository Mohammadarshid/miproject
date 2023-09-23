import React from "react";
import Layout from "../Components/Layout/Layout";
// import PhoneAndroidSharpIcon from "@mui/icons-material/PhoneAndroidSharp";
import MarkEmailReadSharpIcon from "@mui/icons-material/MarkEmailReadSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import {
  Box,
  TableRow,
  Table,
  TableContainer,
  Typography,
  Paper,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact my footaball team</Typography>
        <p>Football House, Sector 19, Phase 1, Dwarka, New Delhi: 110075.</p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media(max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Deltails
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <CallSharpIcon sx={{ color: "black", pt: "1" }} /> 7566212106
                  (tollFree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MarkEmailReadSharpIcon sx={{ color: "email", pt: "1" }} />{" "}
                  mohammadarshid3@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
