import {React} from 'react'
import { Navbar} from './components'
import './App.scss'
import { Header,Menu, Order, About, Footer, OnlineOrder, Delivery, Catering, AboutUs, Contact} from './container'
import Menu2 from './container/Menu2/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './container/404/NotFound'





const App = () => {

    
  return (


    <div id='root'>   
          <Router>
          <Route basename="/">
            <Navbar />
          <Switch>
          <Route exact path="/">
            <Header/>
            <Order/>
            <Menu/>
            <About/>
          </Route>
          <Route path="/order online">
            <OnlineOrder />
            <Delivery/>
          </Route>

          <Route path="/menu">
            <Menu2/>
          </Route>
          <Route path="/catering">
            <Catering />
          </Route>
          <Route  path="/about">
            <AboutUs />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
     </Switch>
       <Footer/>
         </Route>
            </Router>
     </div>




  )}


export default App