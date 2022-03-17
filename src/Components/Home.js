import ProjectCard from './projectCard';
import Gallery from './Gallery';
import ProfileContainer from './ProfileContainer';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      <ProfileContainer />
      <Gallery />
    </div>
  );
}

export default Home;
