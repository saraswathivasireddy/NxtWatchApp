import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import NxtWatchContext from '../../NxtWatchContext'
import Header from '../Header'
import Slider from '../Slider'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'
import {
  VideoItemDetailsC,
  Title,
  ViewYearContainer,
  VYLDSContainer,
  LikeContainer,
  LikeText,
  DislikeText,
  DisLikeContainer,
  LDSContainer,
  SavedContainer,
  SavedText,
  ChannelDetails,
  ChannelImage,
  ChannelName,
  SubsCount,
} from './styledComponents'

const itemConstants = {
  initial: 'Initial',
  progress: 'Progress',
  success: 'Success',
  failure: 'Failure',
}
class VideoItemDetails extends Component {
  state = {
    itemList: {},
    itemStatus: itemConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getItemDetailsApi()
  }

  getItemDetailsApi = async () => {
    this.setState({itemStatus: itemConstants.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const d = await response.json()
      const {video_details} = d
      const data = video_details
      const updatedData = {
        id: data.id,
        title: data.title,
        videoUrl: data.video_url,
        thumbnailUrl: data.thumbnail_url,
        channel: data.channel,
        viewCount: data.view_count,
        publishedAt: data.published_at,
        description: data.description,
      }
      this.setState({itemList: updatedData, itemStatus: itemConstants.success})
    } else {
      this.setState({itemStatus: itemConstants.failure})
    }
  }

  renderItemDetails = () => {
    const {itemStatus} = this.state
    switch (itemStatus) {
      case itemConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  onClickLike = () => {
    this.setState(prevState => {
      return {isLiked: !prevState.isLiked, isDisliked: false}
    })
  }

  onClickDislike = () => {
    this.setState(prevState => {
      return {isLiked: false, isDisliked: !prevState.isDisliked}
    })
  }

  onClickSaveButton = () => {
    this.setState({isSaved: true})
    const {itemList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {setSavedList} = value
          setSavedList(itemList)
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderSuccessView = () => {
    const {itemList, isLiked, isDisliked, isSaved} = this.state
    const {channel} = itemList
    const updatedChannel = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
      subscriberCount: channel.subscriber_count,
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideoItemDetailsC isDarkTheme={isDarkTheme}>
              <ReactPlayer
                url={itemList.videoUrl}
                width="80vw"
                height="400px"
              />
              <Title isDarkTheme={isDarkTheme}>{itemList.title}</Title>
              <VYLDSContainer>
                <ViewYearContainer>
                  <p>{itemList.viewCount} views</p>
                  <BsDot />
                </ViewYearContainer>
                <LDSContainer>
                  <LikeContainer onClick={this.onClickLike}>
                    {isLiked && <AiOutlineLike style={{color: '#3b82f6'}} />}
                    {!isLiked && <AiOutlineLike style={{color: '#7e858e'}} />}
                    <LikeText isLiked={isLiked}>Like</LikeText>
                  </LikeContainer>
                  <DisLikeContainer onClick={this.onClickDislike}>
                    {isDisliked && (
                      <AiOutlineDislike style={{color: '#3b82f6'}} />
                    )}
                    {!isDisliked && (
                      <AiOutlineDislike style={{color: '#7e858e'}} />
                    )}
                    <DislikeText isDisliked={isDisliked}>Dislike</DislikeText>
                  </DisLikeContainer>
                  <SavedContainer onClick={this.onClickSaveButton}>
                    {isSaved && (
                      <RiPlayListAddFill style={{color: '#3b82f6'}} />
                    )}
                    {!isSaved && (
                      <RiPlayListAddFill style={{color: '#7e858e'}} />
                    )}
                    {!isSaved && <SavedText isSaved={isSaved}>Save</SavedText>}
                    {isSaved && <SavedText isSaved={isSaved}>Saved</SavedText>}
                  </SavedContainer>
                </LDSContainer>
              </VYLDSContainer>
              <hr />
              <ChannelDetails>
                <ChannelImage src={updatedChannel.profileImageUrl} />
                <div>
                  <ChannelName isDarkTheme={isDarkTheme}>
                    {updatedChannel.name}
                  </ChannelName>
                  <SubsCount>
                    {updatedChannel.subscriberCount} subscribers
                  </SubsCount>
                  <ChannelName isDarkTheme={isDarkTheme}>
                    {itemList.description}
                  </ChannelName>
                </div>
              </ChannelDetails>
            </VideoItemDetailsC>
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
                {this.renderItemDetails()}
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
