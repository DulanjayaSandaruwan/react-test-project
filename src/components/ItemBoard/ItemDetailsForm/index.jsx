import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../common/Button"

class GridLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather', year: 1972 },
                { label: 'The Godfather: Part II', year: 1974 },
                { label: 'The Dark Knight', year: 2008 },
                { label: '12 Angry Men', year: 1957 },
            ]
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Item Manage
                </Typography>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Name" label="Item name" variant="outlined" size="small"
                        style={{width: '100%'}} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Price" label="Unit Price" variant="outlined" size="small" 
                        style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Qty" label="Quantity" variant="outlined" size="small"
                        style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Size" label="Size" variant="outlined" size="small"
                        style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                        <GDSEButton size="small" variant="contained" label="save"/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                        <GDSEButton size="small" variant="outlined" color="error" label="clear"/>
                    </Grid>
                </Grid>
            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(GridLayout);