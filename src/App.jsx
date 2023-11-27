import { useState } from "react";
import { Box, Typography, ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import theme from "./config/theme/theme";
import SideNav from "./components/SideNav";
import AppHeader from "./components/AppHeader";
import {ProSidebarProvider} from 'react-pro-sidebar'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
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
        </ProSidebarProvider>
        
      </ThemeProvider>
    </>
  );
}
/** @type {import ('@mui/material').SxProps} **/
const styles = {
  container: {
    display: "flex",
    bgcolor: "white",
    height: "calc(100% - 64px)",
  },
  mainSection: {
 p:4,
 width:'100%',
 height: '100%',
 overflow: 'auto'
  },
};
export default App;
