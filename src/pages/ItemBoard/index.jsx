import {Component, Fragment} from "react";
import ItemMenu from "../../components/ItemBoard/ItemMenu"

class ItemBoard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <ItemMenu/>
      </Fragment>
    )
  }
}

export default ItemBoard;