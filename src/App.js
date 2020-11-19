import React,{Suspense} from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import AddPicture from "./AddPicture";
// import Home from "./Home";

const Home = React.lazy(() => import('./Home'));

const AddPicture = React.lazy(() => import('./AddPicture'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>

      <Router>
        <Switch>
          <Route exact component={Home} path='/' />
          <Route exact component={AddPicture} path='/addpicture' />
        </Switch>
      </Router>
              
      </Suspense>
    </div>
  );
}

export default App;
