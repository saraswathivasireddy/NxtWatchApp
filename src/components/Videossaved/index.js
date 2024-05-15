import {Component} from 'react'
import NxtWatchContext from '../../NxtWatchContext'
import Header from '../Header'
import Slider from '../Slider'
import SavedItem from '../SavedItem'
import {
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedPara,
  SavedVideosContainer,
} from './styledComponents'

class Videossaved extends Component {
  renderSavedVideos = () => {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedList} = value
          return (
            <SavedVideosContainer>
              {savedList.map(eachSavedVideo => (
                <SavedItem eachSavedVideo={eachSavedVideo} />
              ))}
            </SavedVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, savedList} = value
          return (
            <div>
              <Header />
              <div>
                <Slider />
                {savedList.length === 0 && (
                  <NoSavedContainer isDarkTheme={isDarkTheme}>
                    <NoSavedImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      alt="no saved videos"
                    />
                    <NoSavedHeading isDarkTheme={isDarkTheme}>
                      No saved videos found
                    </NoSavedHeading>
                    <NoSavedPara>
                      You can save your videos while watching them
                    </NoSavedPara>
                  </NoSavedContainer>
                )}
                {this.renderSavedVideos()}
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Videossaved
