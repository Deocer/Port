import React, {Component} from 'react';
import{
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  Row,Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectLink from './ProjectLink';
class ProjectCard extends Component{
  state = {
   data:this.props.link
  }

  render(){
    return(


<div className="pt-5"  >
  <div className="card mb-3 p-0 " style={{ }} >
    <div className="row g-0">
      <div className="col-lg-8 col-md-8 col-sm-8 ">
        <CardImg  src={this.props.img} className="card-img img-fluid rounded-start" alt="..."  style={{"height" : "70vh", "width":"100%" }} />
        <div className="card-img-overlay p-0" style={{"margin-left" :'1vw', "overflow" : "hidden"}} >
          <div className="bg-light text-center"  style={{"width" : "15%" , "height" : "25%", "border-bottom-left-radius" : "50% 20%", "border-bottom-right-radius" : "50% 20%" }} >
              {this.props.badges}
          </div>          
        </div>
      </div>
      <div className="col-lg-4 col-lg-4 col-sm-8 bg-dark" style={{"border-bottom-right-radius" : "4em"}} >
        <div className="card-body text-center p-5 text-light">
          <h3 className="card-title">{this.props.name}</h3>
          <p className="card-text"> {this.props.description}</p>
          <a href={this.state.data} className="btn btn-primary" style={{"z-index":"6"}} >{this.state.data}</a>
        </div>
      </div>
    </div>
  </div>

</div>
      );
  }

}



export default ProjectCard;