import React, {Component} from 'react';
import{
  Button,
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class ProjectLink extends Component{
  state = {
    data:""
  }

  render(){
    return(
        <a className="btn text-light p-0"  href ={this.props.url}  >
        <span className="material-icons" style={{"font-size":"4vh"}} >north_east</span>
        </a>
      );
  }

}



export default ProjectLink;