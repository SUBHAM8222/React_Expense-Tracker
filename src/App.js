import SignUp from './SignUp/SignUp';
import { Route,Switch } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import './App.css';
import CompleteProfile from './Pages/CompleteProfile';

function App() {
  return (
    <div>
      <Switch>
       <Route path='/welcomePage' exact>
<WelcomePage/>
      </Route>
      <Route path='/CompleteProfile'>
        <CompleteProfile/>

      </Route>
      <SignUp></SignUp>
      </Switch>
      
      
        
     
    </div>
  );
}

export default App;
