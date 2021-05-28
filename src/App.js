import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'



import '@elastic/eui/dist/eui_theme_amsterdam_dark.css'



import './App.css'



import Lastmeal from './components/home/lastmeal'

import Nav from './layout/navbar/navbar'
import { EuiPage, EuiPageBody, EuiPageContent, EuiPageHeader, EuiPageHeaderSection } from '@elastic/eui'

function App() {
  console.log(store.getState())
  return (
    <Provider className='App' store={store}>
      <Router>
        <EuiPage style={{ height: "100vh" }}>
          <EuiPageHeader>
            <EuiPageHeaderSection>
              <Nav />
            </EuiPageHeaderSection></EuiPageHeader>
          <EuiPageBody >
            <EuiPageContent>
              <Lastmeal />
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </Router>
    </Provider>
  )
}

export default App
