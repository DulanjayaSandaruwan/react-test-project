import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import GDSEButton from "../../common/Button"
import ItemTable from "../ItemTable";

function createData(name, unitPrice, quantity, size) {
    return {name, unitPrice, quantity, size};
}

class GridLayout extends Component {
    rows = [];

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            itemName:"",
            itemPrice:"",
            itemQuantity:"",
            itemSize:""
        }
    }
    addDataToTable() {
        this.rows.push(createData(this.state.itemName,this.state.itemPrice,this.state.itemQuantity,
            this.state.itemSize));
        console.log(this.rows);
        this.setState(
            {rows:this.rows}
        );
    }

    clearData(){

    }

    nameUpdate(event){
        console.log(event.target.value);
        const val = event.target.value;
        this.setState(
            {itemName:val})
    }

    priceUpdate(event){
        console.log(event.target.value);
        const val = event.target.value;
        this.setState(
            {itemPrice:val})
    }

    quantityUpdate(event){
        console.log(event.target.value);
        const val = event.target.value;
        this.setState(
            {itemQuantity:val})
    }

    sizeUpdate(event){
        console.log(event.target.value);
        const val = event.target.value;
        this.setState(
            {itemSize:val})
    }

    render() {
        return (
            <Fragment>
                <Typography variant="h4">
                    Item Manage
                </Typography>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField onChange={event => this.nameUpdate(event)} id="outlined-basic" placeHolder="Name" label="Item name" variant="outlined" size="small"
                        style={{width: '100%'}} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField onChange={event => this.priceUpdate(event)} id="outlined-basic" placeHolder="Price" label="Unit Price" variant="outlined" size="small"
                        style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField onChange={event => this.quantityUpdate(event)} id="outlined-basic" placeHolder="Qty" label="Quantity" variant="outlined" size="small"
                        style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField onChange={event => this.sizeUpdate(event)} id="outlined-basic" placeHolder="Size" label="Size" variant="outlined" size="small"
                        style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                        <GDSEButton size="small"
                                    variant="contained"
                                    onClick={() => {
                                        this.addDataToTable()
                                    }}
                                    label="save"/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                        <GDSEButton size="small"
                                    variant="outlined"
                                    onClick={() => {
                                        this.clearData()
                                    }}
                                    color="error"
                                    label="clear"/>
                    </Grid>
                    <ItemTable
                        rows={this.rows}
                    />
                </Grid>
            </Fragment>
        )
    }
}
export default withStyles(styleSheet)(GridLayout);
