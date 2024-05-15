import {RiHome4Fill} from 'react-icons/ri'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {
  HomeList,
  UL,
  TrendingList,
  SliderItemName,
  GamingActive,
  SavedVideosList,
} from './styledComponents'

import NxtWatchContext from '../../NxtWatchContext'

class Slider extends Component {
  state = {
    homeActive: true,
    trendingActive: false,
    gamingActive: false,
    savedVideosActive: false,
  }
  componentDidMount() {
    const {location} = this.props
    const {pathname} = location
    if (pathname === '/') {
      this.setState({
        homeActive: true,
        trendingActive: false,
        gamingActive: false,
        savedVideosActive: false,
      })
    } else if (pathname === '/trending') {
      this.setState({
        homeActive: false,
        trendingActive: true,
        gamingActive: false,
        savedVideosActive: false,
      })
    } else if (pathname === '/gaming') {
      this.setState({
        homeActive: false,
        trendingActive: false,
        gamingActive: true,
        savedVideosActive: false,
      })
    } else if (pathname === '/saved-videos') {
      this.setState({
        homeActive: false,
        trendingActive: false,
        gamingActive: false,
        savedVideosActive: true,
      })
    }
  }

  onClickHome = () => {
    this.setState({
      homeActive: true,
      trendingActive: false,
      gamingActive: false,
      savedVideosActive: false,
    })
  }

  onClickTrending = () => {
    this.setState({
      homeActive: false,
      trendingActive: true,
      gamingActive: false,
      savedVideosActive: false,
    })
  }

  onClickSavedVideos = () => {
    this.setState({
      homeActive: false,
      trendingActive: false,
      gamingActive: false,
      savedVideosActive: true,
    })
  }
  onClickGaming = () => {
    this.setState({
      homeActive: false,
      trendingActive: false,
      gamingActive: true,
      savedVideosActive: false,
    })
  }

  render() {
    const {homeActive, trendingActive, gamingActive, savedVideosActive} =
      this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <UL isDarkTheme={isDarkTheme}>
              <Link style={{textDecoration: 'none'}} to="/">
                <HomeList onClick={this.onClickHome} homeActive={homeActive}>
                  {homeActive && <RiHome4Fill style={{color: 'red'}} />}
                  {!homeActive && <RiHome4Fill style={{color: '#616e7c'}} />}

                  <SliderItemName isDarkTheme={isDarkTheme}>
                    Home
                  </SliderItemName>
                </HomeList>
              </Link>
              <Link to="/trending" style={{textDecoration: 'none'}}>
                <TrendingList
                  onClick={this.onClickTrending}
                  trendingActive={trendingActive}
                >
                  {trendingActive && <HiFire style={{color: 'red'}} />}
                  {!trendingActive && <HiFire style={{color: '#616e7c'}} />}
                  <SliderItemName isDarkTheme={isDarkTheme}>
                    Trending
                  </SliderItemName>
                </TrendingList>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/gaming">
                <GamingActive
                  onClick={this.onClickGaming}
                  gamingActive={gamingActive}
                >
                  {gamingActive && <SiYoutubegaming style={{color: 'red'}} />}
                  {!gamingActive && (
                    <SiYoutubegaming style={{color: '#616e7c'}} />
                  )}
                  <SliderItemName isDarkTheme={isDarkTheme}>
                    Gaming
                  </SliderItemName>
                </GamingActive>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/saved-videos">
                <SavedVideosList
                  onClick={this.onClickSavedVideos}
                  savedVideosActive={savedVideosActive}
                >
                  {savedVideosActive && (
                    <RiPlayListAddFill style={{color: 'red'}} />
                  )}
                  {!savedVideosActive && (
                    <RiPlayListAddFill style={{color: '#616e7c'}} />
                  )}
                  <SliderItemName isDarkTheme={isDarkTheme}>
                    Saved videos
                  </SliderItemName>
                </SavedVideosList>
              </Link>
            </UL>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Slider)
