import {Link} from 'react-router-dom'
import {
  VideoItemList,
  ThumbnailImage,
  ProfileImage,
  ThumbnailContent,
  ThumbnailTitle,
  Name,
  ThumbnailViewsYearsContainer,
} from './styledComponents'
import {BsDot} from 'react-icons/bs'

import NxtWatchContext from '../../NxtWatchContext'

const VideoItem = props => {
  const {eachVideo} = props
  const {channel} = eachVideo
  const updatedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`videos/${eachVideo.id}`} style={{textDecoration: 'none'}}>
            <VideoItemList>
              <ThumbnailImage
                src={eachVideo.thumbnailUrl}
                alt="video thumbnail"
              />
              <ThumbnailContent>
                <ProfileImage
                  src={updatedChannel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <ThumbnailTitle isDarkTheme={isDarkTheme}>
                    {eachVideo.title}
                  </ThumbnailTitle>
                  <Name>{updatedChannel.name}</Name>
                  <ThumbnailViewsYearsContainer>
                    <p>{eachVideo.viewCount} views</p>
                    <BsDot />
                    <p></p>
                  </ThumbnailViewsYearsContainer>
                </div>
              </ThumbnailContent>
            </VideoItemList>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
