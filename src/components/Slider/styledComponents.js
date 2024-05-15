import styled from 'styled-components'

export const SavedVideosList = styled.div`
background-color:${props => {
  return props.savedVideosActive ? '#bca89f' : 'transparent'
}};
  
list-style-type:none;
display:flex;
flex-direction:row;
align-items:center;
width:230px;
padding-left:10px;
cursor:pointer;
`
export const GamingActive = styled.div`
background-color:${props => {
  return props.gamingActive ? '#bca89f' : 'transparent'
}};
list-style-type:none;
display:flex;
flex-direction:row;
align-items:center;
width:230px;
padding-left:10px;
cursor:pointer;
`

export const TrendingList = styled.div`
background-color:${props => {
  return props.trendingActive ? '#bca89f' : 'transparent'
}};
list-style-type:none;
display:flex;
flex-direction:row;
align-items:center;
width:230px;
padding-left:10px;
cursor:pointer;
`

export const HomeList = styled.div`
background-color:${props => {
  return props.homeActive ? '#bca89f' : 'transparent'
}};
list-style-type:none;
display:flex;
flex-direction:row;
align-items:center;
width:230px;
padding-left:10px;
cursor:pointer;
text-decoration:none;
`
export const UL = styled.div`
background-color:${props => {
  return props.isDarkTheme ? '#313131' : '#ffffff'
}};
height:88vh;
margin-top:74px;
position:fixed;
width:230px;
`

export const SliderItemName = styled.p`
color:${props => (props.isDarkTheme ? '#ffffff' : '#616e7c')};
margin-left:20px;
text-decoration:none;
`