import styled from 'styled-components'

export const VideoItemDetailsC = styled.div`
padding-top:14vh;
padding-left:250px;
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

margin-top:0px;
`
export const Title = styled.p`
font-family:"Roboto";
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`
export const VYLDSContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`
export const ViewYearContainer = styled.div`
display:flex;
align-items:center;
font-family:"Roboto";
font-size:14px;
color:#7e858e;
`
export const LikeContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
cursor:pointer;
`

export const LikeText = styled.p`
color:${props => (props.isLiked ? '#3b82f6' : '#7e858e')};
font-family:"Roboto";
`
export const DislikeText = styled.p`
color:${props => (props.isDisliked ? '#3b82f6' : '#7e858e')};
font-family:"Roboto";
`

export const SavedText = styled.p`
color:${props => (props.isSaved ? '#3b82f6' : '#7e858e')};
font-family:"Roboto";
`

export const DisLikeContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-left:15px;
cursor:pointer;
`

export const LDSContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
export const SavedContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-left:15px;
cursor:pointer;
margin-right:25px;
`

export const ChannelDetails = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
`

export const ChannelImage = styled.img`
height:30px;
width:30px;
`

export const ChannelName = styled.p`
font-family:"Roboto";
font-size:14px;
color:${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
margin-left:10px;
`
export const SubsCount = styled.p`
font-family:"Roboto";
font-size:14px;
margin-left:10px;
color:#7e858e;
`