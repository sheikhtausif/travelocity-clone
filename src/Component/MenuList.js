import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import Home from '@material-ui/icons/Home';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuAdjustings: {
        margin: '0 30vh',
        marginTop: "-79px",
        // backgroundColor: "gr",
        color: "white",
        fontSize: "10px",
        width: "12%",
        letterTransformation: "small"
    },
    menuAdjustingsDown: {
        marginTop: "42px",
        width: "520px"
    },
    menuIconsColor: {
        color: "blue",
        padding: "12px",
        fontSize: "12px"
    },
    menuIconsSPacins: {
        padding: "12px"
    }
}));
export default function MenuList() {
    const classMenu = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>

            <Button className={classMenu.menuAdjustings} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                menu
            </Button>
            <Menu
                id="fade-menu"
                className={classMenu.menuAdjustingsDown}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem className={classMenu.menuIconsColor} onClick={handleClose}> <Home /> Profile</MenuItem>
                <MenuItem className={classMenu.menuIconsColor} onClick={handleClose}> <AccessAlarmIcon /> My account</MenuItem>
                <MenuItem className={classMenu.menuIconsColor} onClick={handleClose}> <ThreeDRotation /> Logout</MenuItem>
            </Menu>
        </div >
    );
}