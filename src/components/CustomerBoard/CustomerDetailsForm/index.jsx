import {Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../common/Button"
import CustomerTable from "../CustomerTable";

function createData(name, gender, nic, address) {
    return {name, gender, nic, address};
}

class GridLayout extends Component {
    rows = [];

    constructor(props) {
        super(props);
        this.state = {
            selectGender: [
                {gender: 'Male'},
                {gender: 'Female'},
            ],
            rows: [],
            customerName:"",
            customerGender:"",
            customerNic:"",
            customerAddress:""
        }
    }

    addDataToTable() {
        this.rows.push(createData(this.state.customerName,this.state.customerGender,this.state.customerNic,
            this.state.customerAddress));
        console.log(this.rows);
        this.setState(
            {rows:this.rows}
        );

    }
     nameUpdate(event){
        console.log(event.target.value);
        const val = event.target.value;
        this.setState(
            {customerName:val})
    }

    genderUpdate(e){
        console.log(e.target.value);
        const val = e.target.value;
        this.setState(
            {customerGender:val})
    }

    nicUpdate(event){
        console.log(event.target.value);
        const val = event.target.value;
        this.setState(
            {customerNic:val})
    }

    addressUpdate(event){
        console.log(event.target.value);
        const val = event.target.value;
        this.setState(
            {customerAddress:val})
    }

    render() {
        return (
            <Fragment>
                <Typography variant="h4">
                    Customer Manage
                </Typography>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField onChange={event => this.nameUpdate(event)} id="outlined-basic" placeHolder="Name" label="Customer name" variant="outlined"
                                   size="small"
                                   style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.selectGender}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Select gender"/>}
                            getOptionLabel={
                                (option) => option.gender
                            }
                            onChange={(e, value) => {this.genderUpdate(e)
                            }}
                            size="small"
                            style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField onChange={event => this.nicUpdate(event)} id="outlined-basic" placeHolder="NIC" label="NIC" variant="outlined" size="small"
                                   style={{width: '100%'} }/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField onChange={event => this.addressUpdate(event)} id="outlined-basic" placeHolder="address" label="Address" variant="outlined"
                                   size="small"
                                   style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end">
                        <GDSEButton size="small"
                                    variant="contained"
                                    onClick={() => {
                                        this.addDataToTable()
                                    }}
                                    label="save"/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end">
                        <GDSEButton size="small" variant="outlined" color="error" label="clear"/>
                    </Grid>
                    <CustomerTable
                        rows={this.rows}/>
                </Grid>
            </Fragment>

        )
    }
}

export default withStyles(styleSheet)(GridLayout);
