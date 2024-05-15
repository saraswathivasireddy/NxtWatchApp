import NxtWatchContext from '../../NxtWatchContext'
import Header from '../Header'
import Slider from '../Slider'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import TrendingVideoItem from '../TrendingVideoItem'

import Loader from 'react-loader-spinner'

import {
  TrendingHeadingContainer,
  FireImageContainer,
  TrendingC,
  TrendingVideosContainer,
  LoadingContainer,
  TextHeading,
  EntireTrendingContainer,
  NoResutsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsPara,
  RetryButton,
  FailureContainer,
} from './styledComponents'

import {Component} from 'react'

const trendingApiConstants = {
  initial: 'Initial',
  failure: 'Failure',
  success: 'Success',
  progress: 'Progress',
}

class Trending extends Component {
  state = {
    trendingApiStatus: trendingApiConstants.initial,
    trendingVideoList: [],
  }

  componentDidMount() {
    this.getTrendingApi()
  }

  getTrendingApi = async () => {
    this.setState({trendingApiStatus: trendingApiConstants.progress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
          channel: eachVideo.channel,
          id: eachVideo.id,
          publishedAt: eachVideo.published_at,
          thumbnailUrl: eachVideo.thumbnail_url,
          title: eachVideo.title,
          viewCount: eachVideo.view_count,
        }
      })
      this.setState({
        trendingApiStatus: trendingApiConstants.success,
        trendingVideoList: updatedData,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiConstants.failure})
    }
  }

  getTrendingVideos = () => {
    const {trendingApiStatus} = this.state
    switch (trendingApiStatus) {
      case trendingApiConstants.progress:
        return this.renderLoadingView()
      case trendingApiConstants.success:
        return this.renderSuccessView()
      case trendingApiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onClickFailure = () => {
    this.getTrendingApi
  }

  renderFailureView = () => {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <FailureContainer>
              {isDarkTheme && (
                <NoResultsImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" />
              )}
              {!isDarkTheme && (
                <NoResultsImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
              )}
              <NoResultsHeading isDarkTheme={isDarkTheme}>
                Oops! Something Went Wrong
              </NoResultsHeading>
              <NoResultsPara>
                We are having trouble to complete your request. Please try
                again.
              </NoResultsPara>
              <RetryButton onClick={this.onClickFailure()}>Retry</RetryButton>
            </FailureContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderSuccessView = () => {
    const {trendingVideoList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingVideosContainer isDarkTheme={isDarkTheme}>
              {trendingVideoList.map(eachVideo => {
                return (
                  <TrendingVideoItem eachVideo={eachVideo} key={eachVideo.id} />
                )
              })}
            </TrendingVideosContainer>
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
            <EntireTrendingContainer>
              <Header />
              <div>
                <Slider />
                <TrendingC>
                  <TrendingHeadingContainer isDarkTheme={isDarkTheme}>
                    <FireImageContainer isDarkTheme={isDarkTheme}>
                      <HiFire
                        style={{
                          color: '#ff0000',
                          height: '40px',
                          width: '40px',
                        }}
                      />
                    </FireImageContainer>
                    <TextHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </TextHeading>
                  </TrendingHeadingContainer>
                  {this.getTrendingVideos()}
                </TrendingC>
              </div>
            </EntireTrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending