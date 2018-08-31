import React, { Component } from 'react';

import {UserPage} from './pages/user-store'
import {AdminPage} from './pages/admin-store'
import {ShoppingCart} from './pages/shopping-cart'
import {HomePage} from './pages/home-page'

import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
      activePage: 'homepage'
    }
  }

  changeActivePageToHomePage = () => {
    this.setState({
      activePage: 'homepage'
    })
  }

  changeActivePageToAdminPage = () => {
    this.setState({
      activePage: 'adminpage'
    })
  }

  changeActivePageToUserPage = () => {
    this.setState({
      activePage: 'userpage'
    })
  }

  changeActivePageToShoppingCart = () =>{
    this.setState({
      activePage: 'shoppingcart'
    })
  }

  render(){
    const { activePage } = this.state;
    if(activePage === 'homepage'){
      return (
        <HomePage
        changeActivePageToAdminPage ={this.changeActivePageToAdminPage}
        changeActivePageToUserPage ={this.changeActivePageToUserPage}
        />
      )
    }
    if(activePage === 'adminpage'){
      return <AdminPage 
        changeActivePageToHomePage ={this.changeActivePageToHomePage}
      />
    }
    if(activePage === 'userpage'){
      return <UserPage 
      changeActivePageToHomePage ={this.changeActivePageToHomePage}
      />
    }
    if(activePage === 'shoppingcart'){
      return <ShoppingCart />
    }
    
    return (activePage);


  }
  // render() {
  //   return (
  //     <div className="wrapper">  
  //       <AdminPage />        
  //       <UserPage />        
  //       <ShoppingCart />        
  //       <HomePage />        
  //     </div>
  //   );
  // }
}

export default App;
