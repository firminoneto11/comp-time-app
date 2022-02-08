
// React Imports
import { useState, useContext } from 'react';

// MUI Imports
import {
    AppBar, Box, CssBaseline, Typography, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar,
    Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ListIcon from '@mui/icons-material/List';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// Custom imports
import { IpcRendererContext } from '../context/IpcRendererContext';


const drawerWidth = 240;


export default function Base({ window, children }) {

    const [mobileOpen, setMobileOpen] = useState(false);
    const { ipcRenderer } = useContext(IpcRendererContext);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const quitHandler = () => {
        ipcRenderer.invoke('quit-app');
    }

    const drawer = (
        <div>
            {/* <Toolbar />
            <Divider /> */}
            <List>

                {/* New activity button */}
                <ListItem button>
                    <ListItemIcon>
                        <SaveAsIcon />
                    </ListItemIcon>
                    <ListItemText primary='New activity' />
                </ListItem>

                {/* My Activities button */}
                <ListItem button>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary='My Activities' />
                </ListItem>

                {/* Redeem Hours button */}
                <ListItem button>
                    <ListItemIcon>
                        <QueryBuilderIcon />
                    </ListItemIcon>
                    <ListItemText primary='Redeem Hours' />
                </ListItem>

                {/* Quit button */}
                <ListItem button onClick={quitHandler}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary='Quit' />
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Currente page title (Pass it via props)
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}>
                    {drawer}
                </Drawer>
                <Drawer variant="permanent" open
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}>
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
