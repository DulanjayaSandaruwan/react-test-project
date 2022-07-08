import {Component, Fragment} from "react";
import CustomerMenu from "../../components/CustomerBoard/CustomerMenu"

class CustomerBoard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <CustomerMenu/>
      </Fragment>
    )
  }
}

export default CustomerBoard;