import { MenuItem, makeStyles, Menu } from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import React from "react";
import modules from "app/modules";
import { globalStyles } from "app/style/globalStyles";

interface Props {
    anchorEl: any;
    open: boolean;
    handleClose: any;
    onView: any;
    onEdit: any;

}

const MenuPopup = (props: Props) => {
    const classes = useStyles();
    const {
        anchorEl,
        open,
        handleClose,
        onView,
        onEdit
    } = props;
    return (
        <>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={onView}>
                    <Icon.Visibility className={classes.iconMenuItem} />
          View
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={onEdit}>
                    <Icon.Edit className={classes.iconMenuItem} />
          Edit
                </MenuItem>
            </Menu>
        </>
    );
};

export default MenuPopup;

const useStyles = makeStyles({
    container: {
        padding: modules.MARGIN,
        backgroundColor: modules.WHITE,
        borderRadius: modules.RADIUS_SMALL,
        ...globalStyles.shadow,
    },
    table: {
        minWidth: 700,
    },
    textDate: {
        color: modules.SUB_TITLE,
        fontSize: modules.FONT_H6,
    },
    menuItem: {
        marginTop: modules.PADDING / 2,
        marginBottom: modules.PADDING / 2,
    },
    iconMenuItem: {
        marginRight: modules.PADDING,
        marginLeft: modules.PADDING / 2,
        fontSize: modules.FONT_H3,
    },
});
