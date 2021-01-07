import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import '@elastic/eui/dist/eui_theme_amsterdam_dark.css'
import './App.css'
import Home from './components/home/home'
import Log from './components/log/log'
import Nav from './layout/navbar/navbar'
import {
  EuiButton,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
} from '@elastic/eui'

function App() {
  return (
    <div className='App'>
      <Router>
        <EuiPage>
          <EuiPageBody component='div'>
            <Nav />
            <EuiPageContent>
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Content title</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
                <EuiPageContentHeaderSection>Content abilities</EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                {' '}
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                  <Route path='/home'>
                    <Home />
                  </Route>
                  <Route path='/'>
                    <Log />
                  </Route>
                </Switch>
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </Router>
    </div>
  )
}

export default App
