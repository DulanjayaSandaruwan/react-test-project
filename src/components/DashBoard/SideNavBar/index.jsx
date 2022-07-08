import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ManIcon from '@mui/icons-material/Man';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid';
import CommonCard from "../../common/Card";
import {Link} from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const itemsList = [
        {
            text: "Customer",
            icon: <ManIcon/>,
            rout: "/customer"
        },
        {
            text: "Item",
            icon: <AddShoppingCartIcon/>,
            rout: "/item"
        }
    ]

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <AddShoppingCartIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >

                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    <Toolbar/>
                    <Divider/>
                    <List>
                        {itemsList.map((item, index) => {
                        return(
                            <ListItem component={Link} to={item.rout} key={item.text}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                        );
                        })}
                    </List>
                    <Divider/>
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                <Grid container spacing={5}>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <CommonCard
                            img="https://www.efficy.com/wp-content/uploads/2019/03/new-customer.png"
                            name="Customers"
                            desc="Customer Count = 100"
                            color="red"
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <CommonCard
                            img="https://sourcing.docshipper.com/wp-content/uploads/sites/6/2020/08/supplier.png"
                            name="Items"
                            desc="Item Count = 200"
                            color="red"
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <CommonCard
                            img="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_956,h_637/v1620932091/assets/c0/711fae-cceb-4a6b-beb8-ffa8a67d90d3/original/hero_virtualrestaurant_3x2.svg"
                            name="Orders"
                            desc="Order Count = 550"
                            color="red"
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <CommonCard
                            img="https://blog.mint.com/wp-content/uploads/2020/01/HEADER-3.jpg"
                            name="Daily Income"
                            desc="Daily Income is = Rs.10000.00"
                            color="red"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
