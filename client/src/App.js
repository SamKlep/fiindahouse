import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import HomeScreen from './components/screens/HomeScreen'
import Footer from './components/ui/Footer'
import AboutScreen from './components/screens/AboutScreen'
import ListingsScreen from './components/screens/ListingsScreen'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ListingScreen from './components/screens/ListingScreen'
import ListingItem from './components/screens/ListingItem'
import DashboardScreen from './components/screens/DashboardScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/about' component={AboutScreen} />
        <Route exact path='/listing/:id' component={ListingItem} />
        <Route exact path='/listing' component={ListingScreen} />
        <Route exact path='/listings' component={ListingsScreen} />
        <Route exact path='/login' component={LoginScreen} />
        <Route exact path='/dashboard' component={DashboardScreen} />
        <Route exact path='/register' component={RegisterScreen} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
