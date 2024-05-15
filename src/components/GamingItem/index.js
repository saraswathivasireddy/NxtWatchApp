import {GamingItemList, GamingImage, Title, View} from './styledComponents'
import NxtWatchContext from '../../NxtWatchContext'

const GamingItem = props => {
  const {eachGame} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingItemList>
            <GamingImage src={eachGame.thumbnailUrl} />
            <Title isDarkTheme={isDarkTheme}>{eachGame.title}</Title>
            <View>{eachGame.viewCount} Watching Worldwide</View>
          </GamingItemList>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingItem