import SignUp from './SignUp/SignUp';
import { Route,Switch } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import './App.css';
import CompleteProfile from './Pages/CompleteProfile';
import ChangePassword from './SignUp/ChangePassword';


function App() {
  return (
    <div>
      
      <Switch>
     
       <Route path='/welcomePage' exact>
<WelcomePage/>
      </Route>
      <Route path='/CompleteProfile'>
        <CompleteProfile/>

      </Route >
      <Route path='/ChangePassword' exact>
<ChangePassword/>
      </Route>
      <Route path='/'>
      <SignUp></SignUp>
      </Route>
      
      </Switch>
      
      
        
     
    </div>
  );
}

export default App;
