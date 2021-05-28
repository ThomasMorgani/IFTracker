import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { EuiCollapsibleNav, EuiButton, EuiListGroup, EuiListGroupItem, EuiTitle, EuiSpacer, EuiText, EuiCode } from '@elastic/eui'
import Home from '../components/home/home'
import Log from '../components/log/log'

export default ({ handleToggle, navIsOpen }) => {
  //onClose={() => setNavIsOpen(false)}>
  return (
    <>
      <EuiCollapsibleNav isOpen={navIsOpen} isDocked={false} style={{ right: 0, left: 'auto' }}>
        <div style={{ padding: 16 }}>
          <EuiButton onClick={handleToggle}>CLOSE</EuiButton>
          <EuiTitle>
            <h2>I am some nav</h2>
          </EuiTitle>
          <EuiSpacer />
          {/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */}
          <Switch>
            <Route exact-path='/'>
              <Home />
            </Route>
            <Route path='/log'>
              <Log />
            </Route>
          </Switch>
        </div>
      </EuiCollapsibleNav>
    </>
  )
}
