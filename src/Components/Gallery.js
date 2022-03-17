
import React, {Component} from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import ProjectCard  from './projectCard';
import SocialMedia from './SocialMedia';
class Gallery extends Component{
  state = {
    

  }

  render(){
    return(
     <Carousel>
        <ProjectCard 
            badges = {
              <span> 
              <i className = 'fa-brands fa-html5 round rounded-circle p-2 m-1 text-decoration-none'></i> 
              <i className = 'fa-brands fa-css3 round rounded-circle p-2 m-1 text-decoration-none'></i> 
              <i className = 'fa-brands fa-php round rounded-circle p-2 m-1 text-decoration-none'></i> 
              <i className = 'fa-solid fa-database round rounded-circle p-2 m-1 text-decoration-none'></i>
              <i className = 'fa-solid  round rounded-circle p-2 m-1 text-decoration-none'></i>
              </span>
            }
            name="WANDER"  
            description="Some quick example text to build on the card title and make up the bulk of the card’s content." 
            link ='http://g5wander.rf.gd/' 
            img={require('./wander.png')}  />


        <ProjectCard
            badges = {
              <span> 
              <i className = 'fa-brands fa-html5 round rounded-circle p-2 m-1 text-decoration-none'></i> 
              <i className = 'fa-brands fa-css3 round rounded-circle p-2 m-1 text-decoration-none'></i> 
              <img src='https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg' className = 'fa-solid  round rounded-circle p-2 m-1 text-decoration-none'></img>
              </span>
            }
          name="BOOKFLIX"  
          description="Some quick example text to build on the card title and make up the bulk of the card’s content." 
          link ='http://g5wander.rf.gd/' 
          img={require('./book.png')}   />
    </Carousel>
);
  }

}



export default  Gallery;