import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedList: [],
  setSavedList: () => {},
})

export default NxtWatchContext