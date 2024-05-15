import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../NxtWatchContext'

import Header from '../Header'
import GamingItem from '../GamingItem'
import Slider from '../Slider'
import {SiYoutubegaming} from 'react-icons/si'

import {
  GamingHeadingContainer,
  GamingImageContainer,
  GamingContainer,
  TextHeading,
  LoadingContainer,
  GamingULContainer,
} from './styledComponents'

const gamingApiConstants = {
  initial: 'Initial',
  progress: 'Progress',
  success: 'Success',
  failure: 'Failure',
}

class Gaming extends Component {
  state = {gamingList: [], gamingApiStatus: gamingApiConstants.initial}

  componentDidMount() {
    this.getGamingApi()
  }

  getGamingApi = async () => {
    this.setState({gamingApiStatus: gamingApiConstants.progress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const updatedData = videos.map(eachVideo => {
        return {
          id: eachVideo.id,
          thumbnailUrl: eachVideo.thumbnail_url,
          title: eachVideo.title,
          viewCount: eachVideo.view_count,
        }
      })
      this.setState({
        gamingApiStatus: gamingApiConstants.success,
        gamingList: updatedData,
      })
    } else {
      this.setState({gamingApiStatus: gamingApiConstants.failure})
    }
  }

  renderGamingView = () => {
    const {gamingApiStatus} = this.state
    switch (gamingApiStatus) {
      case gamingApiConstants.progress:
        return this.renderLoadingView()
      case gamingApiConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  renderSuccessView = () => {
    const {gamingList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingULContainer isDarkTheme={isDarkTheme}>
              {gamingList.map(eachGame => {
                return <GamingItem eachGame={eachGame} key={eachGame.id} />
              })}
            </GamingULContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoadingView = () => {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoadingContainer
              isDarkTheme={isDarkTheme}
              className="loader-container"
              data-testid="loader"
            >
              {isDarkTheme && (
                <Loader
                  type="ThreeDots"
                  color="#ffffff"
                  height="50"
                  width="50"
                />
              )}
              {!isDarkTheme && (
                <Loader
                  type="ThreeDots"
                  color="#0f0f0f"
                  height="50"
                  width="50"
                />
              )}
            </LoadingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div>
              <Header />
              <div>
                <Slider />
                <GamingContainer>
                  <GamingHeadingContainer isDarkTheme={isDarkTheme}>
                    <GamingImageContainer>
                      <SiYoutubegaming
                        style={{color: 'red', height: '40px', width: '40px'}}
                      />
                    </GamingImageContainer>
                    <TextHeading isDarkTheme={isDarkTheme}>Gaming</TextHeading>
                  </GamingHeadingContainer>
                  {this.renderGamingView()}
                </GamingContainer>
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming