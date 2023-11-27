import React from 'react'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {Box, Typography, Badge, AppBar, Toolbar, IconButton} from "@mui/material"
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useProSidebar } from "react-pro-sidebar";

const AppHeader = () => {
    const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  return (
    <AppBar sx={styles.appBar}>
        <Toolbar>
     <IconButton onClick={() =>broken ? toggleSidebar() : collapseSidebar()} color='secondary'>
        <MenuTwoToneIcon/>
     </IconButton>
     <Box component='img' sx={styles.appLogo} src='source'/>
    <Box sx={{flexGrow : 1}} />
     <IconButton color='secondary'> <Badge badgeContent={4} color="error"><NotificationsNoneTwoToneIcon />     </Badge></IconButton>

     <IconButton color='secondary'> <SettingsIcon />     </IconButton>

    
     <IconButton color='secondary'> <LogoutIcon />    </IconButton>

    
        </Toolbar>
    </AppBar>
  )
}
/** @type {import ('@mui/material').SxProps} **/
const styles = {
    appBar: {
        position: 'sticky',
        bgcolor: 'neutral.main'
    },
    appLogo:{
      borderRadius: 2,
      width: 80,
      ml:  2,
      cursor: 'pointer', 
    }
}
export default AppHeader