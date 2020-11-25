import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import HomeScreen from './components/screens/HomeScreen'
import Footer from './components/ui/Footer'
import AboutScreen from './components/screens/AboutScreen'
import FeaturedScreen from './components/screens/FeaturedScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/about' component={AboutScreen} />
        <Route exact path='/featured' component={FeaturedScreen} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
