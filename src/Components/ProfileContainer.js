import React, {Component} from 'react';
import{
  Container,
  Row,Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Profile  from './Profile';
import Navibar from './Navbar';
import background from './profile-background.jpeg';
class ProfileContainer extends Component{
  state = {
    isOpen : false
  }

  render(){
    return(
  <div className="container-fluid shadow-4"  style={{ "background-repeat" : "no-repeat", "background-size":"cover", "width" :"99vw",  "min-height" : "130vh",   "overflow":"hidden" , 
   "background-image" : "url('https://cdn.wallpapersafari.com/6/10/VoSGJl.jpg')",
   "border-bottom-left-radius" : "50% 20%", "border-bottom-right-radius" : "50% 20%","border-top" : "none"
 }} >
    <Navibar/>
      <Profile />
  </div>
);
  }

}



export default ProfileContainer;