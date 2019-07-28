import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {Switch, Route, Redirect } from 'react-router-dom'
import Shop from './Pages/ShopPage/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/SignIn-up/signin-up';
import CheckoutPage from './Pages/checkout/Checkout';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/userReducer/userActions'

import {  createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/userReducer/user.selectors'


import { selectCollectionsOverview } from './redux/ShopReducer/shop.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;
  // an open subscription between firebase and this application.
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          // console.log(snapshot.data())
          this.props.setTheCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        this.props.setTheCurrentUser(userAuth);
        this.props.addCollectionAndDocuments('collections', this.props.collections.map(({title, items}) => (
          {title, items}
        )))
      }
    })
  }

  // closing the subscription whent the component unmounts.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // Do not use exact path on Routes that have nested Routes.

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={ (routeProps) => <HomePage {...routeProps}/> }/>
          <Route path="/shop" render={ (routeProps) => <Shop {...routeProps}/> }/>
          <Route exact path="/signin" render={(routeProps) => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp {...routeProps}/>)}/>
          <Route exact path="/checkout" render={(routeProps) => <CheckoutPage {...routeProps}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollectionsOverview
});

const mapDispatchToProps = dispatch => {
  return {
    setTheCurrentUser: user => dispatch(setCurrentUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

