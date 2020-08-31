import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import NavTopbar from './NavTopbar';
import NavSidebar from './NavSidebar';
import Home from '../components/home/Home';
import ClassFunctionContainer from '../components/examples/classVsFunctional/ClassFunctionContainer';
import AppContextExample from '../components/examples/contextApi/App';
import ToDoList from '../components/dci/toDo/ToDoList';
import FootballTeams from '../components/dci/football/FootballTeams';
import MovieApp from '../components/dci/movieApp/MovieApp';
import MovieListApp from '../components/dci/movieList/MovieListApp';
import Userlist from '../components/dci/userList/UserList';
import 'primereact/resources/themes/rhea//theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './layout/App.scss';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = (show) => {
    if (show === false) {
      setShowSidebar(show);
    } else {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <div id='app' className='container p-grid' style={{ top: '200px' }}>
      <NavTopbar handleShowSidebar={handleShowSidebar} />
      <NavSidebar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />
      <div className='p-col-12 '>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/tests/classvsfunction'
            component={ClassFunctionContainer}
          />
          <Route exact path='/tests/contextapi' component={AppContextExample} />
          <Route exact path='/dci/todolist' component={ToDoList} />
          <Route exact path='/dci/footballteams' component={FootballTeams} />
          <Route exact path='/dci/movieApp' component={MovieApp} />
          <Route exact path='/dci/movielist' component={MovieListApp} />
          <Route exact path='/dci/userlist' component={Userlist} />

          <Route path='/404' component={NotFoundPage} />
          <Redirect to='/404' />
        </Switch>
      </div>
    </div>
  );
}

export default App;
