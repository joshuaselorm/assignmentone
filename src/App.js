
import './App.css';
import First from './component/First' //homepage
import Second from './component/Second' //about
import Third from './component/Third'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Fourth from './component/Fourth';
import Home from './component/Home'
import Sixth from './component/Sixth';
import Forms from './component/Forms';
import Video from './component/Video'
function App() {
  return (
    <div className="App">
    {/* <Home/> */}
  
     {/* <Fourth/> */}

     <Router>
        <Fourth/>
        <Video/>
       <Switch>
          <Route exact path='/' component={First}/>
          <Route path='/about' component={Second}/>
          <Route path='/contact' component={Third}/>
          {/* <Route path='/forms' component={Forms}/> */}

       </Switch>
        <Forms/>
          <Sixth/>
     </Router>
    </div>
  );
}

export default App;
