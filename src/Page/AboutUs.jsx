import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import video from '../Images/video.mp4'

const Container=styled.div`
  display: flex;
  margin: 5rem 5rem 10rem 5rem;
 // border-bottom: 1pt solid white;
  height: 70vh;
  box-shadow: 0.25rem 0.25rem 1rem  #5b40bb ;
`
const Written=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`
const ExploreText=styled.span`
  color: orangered;
  font-size: 1rem;
  position: relative;
  animation: fade-inout 1s infinite alternate;

  @keyframes fade-inout {
    0%{opacity:1}
    100%{opacity:0.2}
  }
 
`
const LineCont=styled.div`
background-color: orangered;
  height: 0.3vh;
  width: 70%;
  position: absolute;
  top: 0.7rem;
`
const Head=styled.span`
  color: ${props=>props.color};
  font-size: 3rem;
font-family: sans-serif;
letter-spacing: 0.2rem;
text-transform: uppercase;

text-align: center;
`
const HeadDes=styled.h1`
  font-size: 2rem;
  width: 70%;
  color: white;
 // border: 1pt solid white;
  display: flex;
 text-align: left;
 font-family: sans-serif;
`
const SmallText=styled.span`
  color: white;
  font-size: 1.1rem;
  width: 70%;
  text-align: left;
  font-weight: 100;
`
const Paragraph=styled.span`
 position: relative;
  font-size: 1.5rem;
  color: black;
  -webkit-text-stroke: 0.3vw black;
  letter-spacing: .1rem;
  
  &::before{
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    color: white;
    -webkit-text-stroke: 0vw black;
    border-right: 2pt solid white;
    overflow:hidden;
    animation: animate 10s linear infinite;
    white-space: nowrap;

    @keyframes animate {
      0%,5%,10%
      {
        width: 0%;
      }
      60%,70%,80%
      {
        width: 100%;
      }
    }
  }
`
const ImageCon=styled.div`
    flex: 1;
    position: relative;
`
const Image=styled.img`
    width: 100%;
    height:70vh;
    object-fit: cover;
    border-radius: 0.25rem;
`
const Video=styled.video`
    width: 100%;
    height:70vh;
    object-fit: cover;
    border-radius: 0.25rem;
`
const MissionCont=styled.div`
  position: absolute;
  background-color: #4a35a7;
  width: 40%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`
const Missionhead=styled.h1`
  font-size: 1.5rem;
  text-transform: capitalize;
`
export const AboutUs = () => {
 const videoRef=useRef();
 useEffect (()=>{
  videoRef.current.play()
 })
  return (
    <>
    <Container>
    <Written>
    <ExploreText><LineCont style={{right: "6rem"}}/>Let's Expore<LineCont style={{left: "6rem"}}/></ExploreText>
    <div  style={{marginTop:"2rem",marginBottom:"2rem"}}><Head color='aqua'>Tech</Head><Head color='white'>Develoopers</Head></div>
    <Paragraph data-text="Where we find solutions!">Where we find solutions!</Paragraph>
    </Written>
    <ImageCon>
    <Video id='vid' autoplay="autoplay" muted  loop ref={videoRef}>
      <source  src={video} type="video/mp4"></source>
    </Video>
    </ImageCon>
    </Container>
    <Container>
     <ImageCon>
      <MissionCont style={{left:"14rem",backgroundColor:"#a72295"}}>
        <SmallText ><Missionhead>Our Vision</Missionhead> is to help our clients succeed in competitive market.</SmallText>
      </MissionCont>      
      <MissionCont >
        <SmallText><Missionhead>Our mission</Missionhead>help our clients achieve their goals by providing them with the tools and technology they need to succeed in today's competitive marketplace</SmallText>
      </MissionCont>
 <Image src='https://img.freepik.com/free-photo/young-team-leader-big-corporation-briefing-coworkers-pointing-graph-meeting-corporate-staff_482257-4169.jpg?w=2000'/>
     </ImageCon>
     <Written>
<ExploreText >ABOUT US<LineCont style={{right: "6rem"}}/></ExploreText>
<HeadDes>Welcome to our software development company!</HeadDes>
<SmallText>We are a team of experienced and dedicated professionals who specialize in creating innovative software solutions for businesses of all sizes.</SmallText>
     </Written>
    </Container>

    </>
  )
}
