import "./App.css";
import "./assets/css/Home.css";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Courses from "./Components/Courses";
import MyProfile from "./Components/MyProfile";
import ViewCourse from "./Components/ViewCourse";
import HrHome from "./Components/HrHome";
import Modules from "./Components/Modules";
import InternModel from "./Components/InternModel";
import ScrollToTop from "./Components/ScrollToTop";
import ViewModule from "./Components/ViewModule";
import CreateModule from "./Components/CreateModule";
import EditModule from "./Components/EditModule";
import Dummy from "./Components/Dummy";
import InternHistory from "./Components/InternHistory";

function App() {
  return (
    <div className="App container_wrap">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dummy" component={Dummy} />
          <div>
            <ScrollToTop />
            <Sidebar />
            <Navbar />
            <div className="home-content">
              <Route exact path="/home" component={HrHome} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/profile" component={MyProfile} />
              <Route exact path="/viewCourse" component={ViewCourse} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/modules" component={Modules} />
              <Route exact path="/internModel" component={InternModel} />
              <Route exact path="/viewModule" component={ViewModule} />
              <Route exact path="/createModule" component={CreateModule} />
              <Route exact path="/editModule" component={EditModule} />
              <Route exact path="/internHistory" component={InternHistory} />
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
