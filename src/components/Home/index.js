import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import VideoItem from '../VideoItem'

import Header from '../Header'

import Slider from '../Slider'

import NxtWatchContext from '../../NxtWatchContext'

import {
  HomeContainer,
  HomeRightContainer,
  BannerImg,
  ImageLogo,
  PrepaidPara,
  BannerImageInside,
  CloseButton,
  SearchContainerDark,
  SearchInputDark,
  SearchVideoContainerDark,
  SearchButtonDark,
  LoadingContainer,
  VideosContainer,
  NoResutsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsPara,
  RetryButton,
  FailureContainer,
} from './styledComponents'

const videosApiConstants = {
  success: 'Success',
  initial: 'Initial',
  progress: 'Progress',
  failure: 'failure',
}

class Home extends Component {
  state = {
    bannerShown: true,
    searchText: '',
    videosList: [],
    videosApiStatus: videosApiConstants.initial,
    search: '',
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    this.setState({videosApiStatus: videosApiConstants.progress})
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
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
        videosList: updatedData,
        videosApiStatus: videosApiConstants.success,
      })
    } else {
      this.setState({videosApiStatus: videosApiConstants.failure})
    }
  }

  getVideos = () => {
    const {videosApiStatus} = this.state
    switch (videosApiStatus) {
      case videosApiConstants.progress:
        return this.renderLoadingView()
      case videosApiConstants.success:
        return this.renderSuccessView()
      case videosApiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onClickFailure = () => {
    this.getVideosApi()
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
  onClickEmptyRetry = () => {
    this.getVideosApi()
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    if (videosList.length !== 0) {
      return (
        <VideosContainer>
          {videosList.map(eachVideo => (
            <VideoItem eachVideo={eachVideo} key={eachVideo.id} />
          ))}
        </VideosContainer>
      )
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <NoResutsContainer>
              <NoResultsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoResultsHeading isDarkTheme={isDarkTheme}>
                No Search results found
              </NoResultsHeading>
              <NoResultsPara>
                Try different key words or remove search filter
              </NoResultsPara>
              <RetryButton onClick={this.onClickEmptyRetry}>Retry</RetryButton>
            </NoResutsContainer>
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
            <LoadingContainer className="loader-container" data-testid="loader">
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

  onClickClose = () => {
    this.setState({bannerShown: false})
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onClickSearchButton = () => {
    this.setState(prevState => {
      return {searchText: prevState.search}
    }, this.getVideosApi)
  }

  render() {
    const {bannerShown, search} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div>
              <Header />
              <HomeContainer>
                <Slider />
                <HomeRightContainer isDarkTheme={isDarkTheme}>
                  {bannerShown && (
                    <BannerImg data-testid="banner">
                      <CloseButton data-testid="close">
                        <IoMdClose
                          style={{height: '35px', width: '35px'}}
                          onClick={this.onClickClose}
                        />
                      </CloseButton>
                      <BannerImageInside>
                        <ImageLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />

                        <PrepaidPara>Buy Nxt Watch Premium</PrepaidPara>
                        <button>GET IT NOW</button>
                      </BannerImageInside>
                    </BannerImg>
                  )}
                  <SearchVideoContainerDark>
                    <SearchContainerDark>
                      <SearchInputDark
                        type="search"
                        placeholder="Search"
                        isDarkTheme={isDarkTheme}
                        onChange={this.onChangeSearch}
                        value={search}
                      />
                      <SearchButtonDark
                        isDarkTheme={isDarkTheme}
                        onClick={this.onClickSearchButton}
                        data-testid="searchButton"
                      >
                        <IoMdSearch
                          style={{
                            height: '30px',
                            width: '30px',
                            color: '#7e858e',
                          }}
                        />
                      </SearchButtonDark>
                    </SearchContainerDark>
                    {this.getVideos()}
                  </SearchVideoContainerDark>
                </HomeRightContainer>
              </HomeContainer>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home