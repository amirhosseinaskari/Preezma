import React from 'react'
import { Provider } from 'react-redux'
import './Theme/_theme.scss'
import WorkoutList from '~components/WorkoutList'
import { store } from '~redux/store'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { Container } from './AppStyle'
import Exercise from '~components/Exercise'
import Compeleted from '~components/Compeleted'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container justify='center'>
          <Switch>
            <Route exact={true} path='/'>
              <WorkoutList />
            </Route>
            <Route path='/exercise'>
              <Exercise />
            </Route>
            <Route path='/compeleted'>
              <Compeleted />
            </Route>
            <Route path='*'>
              <div>404</div>
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  )
}

export default App
