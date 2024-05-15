import './App.css'

import {Switch, Route} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

import NxtWatchContext from './NxtWatchContext'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import {Component} from 'react'

import VideoItemDetails from './components/VideoItemDetails'

import Videossaved from './components/Videossaved'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedList: []}

  toggleTheme = () => {
    this.setState(prevState => {
      return {isDarkTheme: !prevState.isDarkTheme}
    })
  }

  setSavedList = itemList => {
    const {savedList} = this.state
    if (savedList.includes(itemList) === false) {
      this.setState(prevState => ({savedList: [...savedList, itemList]}))
    }
  }

  render() {
    const {isDarkTheme, savedList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          savedList,
          setSavedList: this.setSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={Videossaved} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
