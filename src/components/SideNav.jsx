import React from 'react'
import {Menu, MenuItem, Sidebar, useProSidebar} from 'react-pro-sidebar'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'; import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; import StyleIcon from '@mui/icons-material/Style';
import {Typography, Box, useTheme, Avatar} from '@mui/material'
const SideNav = () => {
    const { collapsed } = useProSidebar();
    const theme = useTheme();
  return (
    <Sidebar  style={{ height: "100%", top: 'auto', left: 0 }}
    breakPoint="md"
    backgroundColor={theme.palette.neutral.light}>
        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
            {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Your Channel</Typography> : null}
            {!collapsed ? <Typography variant="overline">React with Masoud</Typography> : null}
        </Box>
        <Menu>
            <MenuItem active icon={<DashboardOutlinedIcon />}>
             <Typography variant='body2'>Dashboard</Typography>
            </MenuItem>
            <MenuItem active icon={<DashboardOutlinedIcon />}>
             <Typography variant='body2'>Products</Typography>
            </MenuItem>
            <MenuItem active icon={<DashboardOutlinedIcon />}>
             <Typography variant='body2'>Orders</Typography>
            </MenuItem>
            <MenuItem active icon={<DashboardOutlinedIcon />}>
             <Typography variant='body2'>Clients</Typography>
            </MenuItem>
            <MenuItem active icon={<DashboardOutlinedIcon />}>
             <Typography variant='body2'>Dashboard</Typography>
            </MenuItem>
        </Menu>
    </Sidebar>
  )
}

export default SideNav

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }

}