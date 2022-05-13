import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Dashboard from "./Components/Dashbord/Dashboard";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import MyProfile from "./Components/Profile/MyProfile";
import ViewCourse from "./Components/Courses/ViewCourse";
import HrHome from "./Components/HrHome/HrHome";
import Modules from "./Components/Module/Modules";
import InternModel from "./Components/InternModal/InternModel";
import ScrollToTop from "./Components/ScrollToTop";
import ViewModule from "./Components/Module/ViewModule";
import CreateModule from "./Components/Module/CreateModule";
import CreateCourse from './Components/Module/CreateCourse'
import EditModule from "./Components/Module/EditModule";
import InternHistory from "./Components/InternModal/InternHistory";
import CandidateProfile from "./Components/Profile/CandidateProfile";
import InternHome from "./Components/InternModal/InternHome";
import NewCourse from "./Components/Courses/NewCourse";
import AssignTask from "./Components/AssignTask/AssignTask";

function App() {
  return (
    <div className="App container_wrap">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
            <ScrollToTop />
            <Sidebar />
            <Navbar />
            <div className="home-content">
              <Route exact path="/home" component={HrHome} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/profile" component={MyProfile} />
              <Route exact path="/viewcourse" component={ViewCourse} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/modules" component={Modules} />
              <Route exact path="/internModel" component={InternModel} />
              <Route exact path="/viewmodule" component={ViewModule} />
              <Route exact path="/createModule" component={CreateModule} />
              <Route exact path="/createcourse" component={CreateCourse} />
              <Route exact path="/editModule" component={EditModule} />
              <Route exact path="/internHistory" component={InternHistory} />
              <Route exact path="/newCourse" component={NewCourse} />
              <Route
                exact
                path="/candidateProfile/:id"
                component={CandidateProfile}
              />
              <Route exact path="/internHome" component={InternHome} />
              <Route exact path="/assigntask" component={AssignTask} />
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
