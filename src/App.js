import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Sticky from 'react-stickynode';
// /import Overlay from 'react-overlay-component';
import './App.css';

//=== COMPONENTS ===
import Home from './components/pages/home/home.jsx';
import Menu from './components/pages/menu/menu.jsx';
import Locations from './components/pages/locations.jsx';
import About from './components/pages/about.jsx';
import Email from './components/pages/email.jsx';
import NotFound from './components/pages/not-found.jsx';

import NavBar from './components/commons/navbar.jsx';
import Footer from './components/commons/footer.jsx';

import { getRamenCategories } from './data/ramenCategories';
import { getToppingsList } from './data/toppings';
import { getSidesList } from './data/sides';
import { getBeveragesList } from './data/beverages';

export default class App extends Component {
  state = {
    menuItems: getRamenCategories(),
    toppings: getToppingsList(),
    sides: getSidesList(),
    beverages: getBeveragesList(),
    currentPath: '',
    theposition: 0
  };

  // ===== MOUNTING =====
    // async componentDidMount() {
    //   const { data } = await getRamenCategories();
  
    //   this.setState({ menuItems: data });
    // };

    componentDidMount() {
      window.addEventListener('scroll', this.listenToScroll);
      window.addEventListener('click', this.listenToLoad);
      window.addEventListener('load', this.listenToLoad);
    }
    
    componentWillUnmount() {
      window.removeEventListener('scroll', this.listenToScroll);
      window.removeEventListener('click', this.listenToLoad);
      window.removeEventListener('load', this.listenToLoad);
    }
    
    listenToScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
    
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
      const scrolled = winScroll / height;
    
      this.setState({
        theposition: scrolled,
      })
    }

    listenToLoad = () => {
      const pagePath = window.location.pathname;

      this.setState({ currentPath: pagePath });
    }

  render() {
    // console.log(this.state.beverages[0]);
    return (
      <div>
          <div className="content">
          
               <Sticky innerZ={1}>
                <NavBar 
                  scrollPosition={this.state.theposition}
                  currentPath={this.state.currentPath}
                />
              </Sticky>
       
          {/* <Navigation/> */}
            <Switch>
                <Route path="/" exact render={(props) => <Home menuItems={this.state.menuItems}/>}/>
                <Route path="/menu" exact render={(props) => <Menu 
                    menuItems={this.state.menuItems}
                    toppings={this.state.toppings}
                    sides={this.state.sides}
                    beverages={this.state.beverages}
                />} />
                <Route exact path="/locations" component={Locations}/>
                <Route exact path="/about" component={About}/> 
                <Route exact path="/email" component={Email}/>  
                <Route exact path="/not-found" component={NotFound}/>
                
                <Redirect from="/home" exact to="/"/>
                <Redirect to="/not-found"/>
            </Switch>
           <Footer/> 
          </div>
      </div>
    )
  }
}
