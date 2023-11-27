import { useState } from "react";
import { Box, Typography, ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import theme from "./config/theme/theme";
import SideNav from "./components/SideNav";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
          <Box sx={styles.container}>
      
              <SideNav />
              <Box
                component={'main'}
                sx={styles.mainSection}
              >
        
              </Box>

          </Box>
      </ThemeProvider>
    </>
  );
}
/** @type {import ('@mui/material').SxProps} **/
const styles = {
  container: {
    display: "flex",
    bgcolor: "red",
    height: "calc(100% - 64px)",
  },
  mainSection: {
 p:1,
 width:'100%',
 height: '100%',
 overflow: 'auto'
  },
};
export default App;
