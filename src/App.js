import react from 'react';
import {BrowserRouter,
Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Favorite from './Components/Favorite';
import Header from './Components/Header';
class App extends react.Component {
  render() {
    return (
      <>
      <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>
            <Route exact path='/Favorite'>

              <Favorite/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}


export default App;
