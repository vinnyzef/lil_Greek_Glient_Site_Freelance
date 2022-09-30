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
         <Switch>
          <Route exact path="/">
          <Navbar />
            <Header/>
            <Order/>
            <Menu/>
            <About/>
          </Route>
          <Route path="/order online">
          <Navbar />
            <OnlineOrder />
            <Delivery/>
          </Route>

          <Route path="/menu">
          <Navbar />
            <Menu2/>
          </Route>
          <Route path="/catering">
          <Navbar />
            <Catering />
          </Route>
          <Route  path="/about">
          <Navbar />
            <AboutUs />
          </Route>
          <Route  path="/contact">
          <Navbar />
            <Contact />
          </Route>

          <Route path="*">
          <Navbar />
            <NotFound/>
          </Route>
     </Switch>
       <Footer/>
            </Router>
     </div>




  )}


export default App