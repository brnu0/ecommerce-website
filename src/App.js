import React from 'react';
import { Route } from 'react-router-dom'

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
//Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import './default.scss';

function App() {
  return (
    <div className="App">
      <switch>
          <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}/>
        </switch>
    </div>
  );
}

export default App;
