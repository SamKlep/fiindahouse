import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import HomeScreen from './components/pages/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={HomeScreen} />
      </Switch>
    </Router>
  )
}

export default App
