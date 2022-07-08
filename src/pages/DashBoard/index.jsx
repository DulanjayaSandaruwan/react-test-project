import {Component, Fragment} from "react";
import SideNavBar from "../../components/DashBoard/SideNavBar"

class DashBoard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <SideNavBar/>
      </Fragment>
    )
  }
}

export default DashBoard;