import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state={
      dishes: DISHES,
    };
  }

  componentDidUpdate(){
    console.log("Main component componentDidUpdate invoked");
  }

  componentWillUpdate(){
    console.log("Main component componentWillUpdate invoked");
  }

  render() {
    console.log("Main component render invoked");

    const HomePage = () => {
      return(
        <Home />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
