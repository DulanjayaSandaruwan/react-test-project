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
            selectGender: [
                { gender: 'Male'},
                { gender: 'Female'},
            ]
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Customer Manage
                </Typography>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Name" label="Customer name" variant="outlined" size="small"
                        style={{width: '100%'}} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.selectGender}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Select gender" />}
                            getOptionLabel={
                                (option) => option.gender
                            }
                            onChange={(e, value) => {
                                console.log(value.gender);
                            }}
                            size="small"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="NIC" label="NIC" variant="outlined" size="small" 
                        style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="address" label="Address" variant="outlined" size="small"
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