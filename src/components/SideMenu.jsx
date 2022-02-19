
// React Imports
import { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";

// MUI Imports
import {
    List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider
} from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ListIcon from '@mui/icons-material/List';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// Custom imports
import { ElectronAPIContext } from '../context/ElectronAPIContext';


export default function SideMenu() {

    const { ipcRenderer } = useContext(ElectronAPIContext);
    const history = useHistory();

    const quitHandler = () => {
        ipcRenderer.invoke('quit-app');
    }

    return (
        <Fragment>
            {/* <Toolbar />
            <Divider /> */}
            <List>

                {/* My Activities button */}
                <ListItem button onClick={() => history.push('/')}>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary='My Activities' />
                </ListItem>

                {/* New activity button */}
                <ListItem button onClick={() => history.push('/new-activity')}>
                    <ListItemIcon>
                        <SaveAsIcon />
                    </ListItemIcon>
                    <ListItemText primary='New activity' />
                </ListItem>

                {/* Redeem Hours button */}
                <ListItem button onClick={() => history.push('/redeem')}>
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
        </Fragment>
    );
}
