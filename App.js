import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



function App() {
  return (
    <Router>
      <div> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path = "/creatuser" element = {<Signup/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
