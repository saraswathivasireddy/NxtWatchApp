import styled from 'styled-components'

export const VideoItemList = styled.li`
list-style-type:none;
margin-top:20px;
margin-right:20px;
display:flex;
flex-direction:row;
`

export const ThumbnailImage = styled.img`
width:250px;
`

export const ProfileImage = styled.img`
height:30px;
width:30px;
`
export const ThumbnailContent = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
margin-left:15px;

`

export const ThumbnailTitle = styled.p`
font-family:"Roboto";
font-size:14px;
color:${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
`

export const Name = styled.p`
font-family:"Roboto";
font-size:14px;
color:#7e858e;
`

export const ThumbnailViewsYearsContainer = styled.div`
font-family:"Roboto";
font-size:14px;
color:#7e858e;
display:flex;
flex-direction:row;
align-items:center;
`
