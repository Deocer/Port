import React, {Component} from 'react';
import{
  Button,
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class SocialMedia extends Component{
  state = {
    data:""
  }

  render(){
    return(
        <div>
        <a className={this.props.nclass}  href ={this.props.url}  >
        </a>
        <p>{this.props.text}</p>
        </div>

      );
  }

}



export default SocialMedia;