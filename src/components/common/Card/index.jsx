import { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

class CommonCard extends Component{
    static propTypes = {
        name: PropTypes.string,
        img: PropTypes.any,
        desc: PropTypes.string,
        color: PropTypes.string
    }

    static defautlProps = {
        name: "",
        img: "",
        desc: "",
        color: "primary"
    }

   render() {
       return(
           <Card sx={{ maxWidth: 345 }} color={this.props.color}>
               <CardMedia
                   component="img"
                   height="140"
                   image={this.props.img}
                   alt="green iguana"

               />

               <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                       {this.props.name}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                       {this.props.desc}
                   </Typography>
               </CardContent>
               <CardActions>
                   <Button size="small">Learn More</Button>
               </CardActions>
           </Card>
       );
   }
}

export default CommonCard;