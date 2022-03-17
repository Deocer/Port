import React, {Component} from 'react';
import{
  Container,
  Row,Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ImageGallery from 'react-image-gallery';
import Gallery from './Gallery';


class Resume extends Component{
  state = {
    

  }

  render(){
    return(
  <div className="container-fluid"  style={{ "width" :"99vw", "height" : "100vh",  "background-image" : "url('https://img.freepik.com/free-vector/gradient-dark-dynamic-lines-background_23-2148995950.jpg')"  }} >

  <Gallery images = {[
  {
    original: 'https://picsum.photos/id/1018/250/150/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]}   />




  </div>
);
  }

}



export default Resume;