import React, {Component} from 'react';
import{
  Button,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImg
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SocialMedia from './SocialMedia';

class Profile extends Component{
  state = {
    isOpen : false
  }

  render(){
    return(
  <div className="shadow-lg container-fluid mt-3" style ={{"max-width" : "550px", "min-width" : "300px", "width" : "100%",  "Color":"white", "background-color" : "transparent"}}>
    <Card className="shadow-lg text-center content-center" style ={{"color":"black", "background-color" : "whitesmoke" }}>
        <CardImg className ="card-img-top card-img" top width="100%" src='https://artsy-media-uploads.s3.amazonaws.com/eWNSo3QlSQwNuHxEpxapXQ%2FAstrology+thumb+800.jpg' alt="Card image cap" 
            style= {{"max-height":"20vh"}} />
        <div className="card-img-overlay text-center content-center" style={{"padding":"0.2rem","margin":"auto","z-index":"4" }}>
          <img className="image-rounded rounded-circle shadow-lg m-3 mt-5"  src ='https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.6435-9/75340951_2674982262558939_5902432310598303744_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFulKrA39Mkn_Ph_LM_EbStxJAIgeBs6brEkAiB4Gzpur1ALfApk-nuJ8oj4rnqik9KXIJAbK5JlDssk8tPsEO7&_nc_ohc=LqgF82_h9WAAX_OJct4&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT_wf75ry_HeJjGwcPUDZS-WoUqlM2WgaK3eUj4Bj3nsdQ&oe=62532320' 
            style= {{"max-height":"15vh","z-index" :"3"}}></img>
        </div>        
        <CardBody >
          <CardTitle style={{"font-size":"2rem"}}>
            DEOCER MORALES
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h4"> Web Developer </CardSubtitle>
          <CardText>
           <div className ="d-flex justify-content-center" >

           <SocialMedia nclass="fa fa-facebook round rounded-circle p-2 m-1 text-decoration-none"  />
           <SocialMedia nclass="fa fa-google round rounded-circle p-2 m-1 text-decoration-none"  />
           <SocialMedia nclass="fa fa-linkedin round rounded-circle p-2 m-1 text-decoration-none"  />

            </div>

          </CardText>
          <CardText className="text-muted " style ={{"width" : "80%" ,"text-align" :"center", "margin" : "auto"}} >
           ewqewqeqweqwewqewqewqewqewqewqewqewqewqewqe wqewqewqe wqewqe wewqewqeqw qweqwewqeikwbuqwi9ugd wq;ejioqwdoiqwhdoqw uidghwqoihdqwodihwoxiqhwr3 qwfdqwf w
          </CardText>
          <CardSubtitle className="container-fluid mb-2 mt-4 pt-4 " style={{"background-color" : "grey"}}> 
  
            <div className ="d-flex justify-content-center" >

            <SocialMedia nclass="fa-brands fa-html5 round rounded-circle p-2 m-1 text-decoration-none" text ="HTML" />
            <SocialMedia nclass="fa-brands fa-css3 round rounded-circle p-2 m-1 text-decoration-none" text ="CSS"  />
            <SocialMedia nclass="fa-brands fa-php round rounded-circle p-2 m-1 text-decoration-none" text ="PHP" />
            <SocialMedia nclass="fa-solid fa-database round rounded-circle p-2 m-1 text-decoration-none" text ="MySql" />
            <SocialMedia nclass="fa-brands fa-react round rounded-circle p-2 m-1 text-decoration-none"  text ="ReactJS" />

            </div>
          </CardSubtitle>
        </CardBody>
      </Card>
  </div>
);
  }

}



export default Profile;