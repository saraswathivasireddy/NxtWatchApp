import {
  VideoItemList,
  ThumbnailImage,
  ThumbnailContent,
  ThumbnailTitle,
  Name,
  ThumbnailViewsYearsContainer,
} from './styledComponents'
import {BsDot} from 'react-icons/bs'

import NxtWatchContext from '../../NxtWatchContext'

const TrendingVideoItem = props => {
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
          <VideoItemList>
            <ThumbnailImage src={eachVideo.thumbnailUrl} />
            <ThumbnailContent>
              <div>
                <ThumbnailTitle isDarkTheme={isDarkTheme}>
                  {eachVideo.title}
                </ThumbnailTitle>
                <Name>{updatedChannel.name}</Name>
                <ThumbnailViewsYearsContainer>
                  <p>{eachVideo.viewCount} views</p>
                  <BsDot />
                </ThumbnailViewsYearsContainer>
              </div>
            </ThumbnailContent>
          </VideoItemList>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
