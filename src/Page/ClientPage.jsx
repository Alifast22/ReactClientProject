import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import img1 from '../Images/edit.png'
import img2 from '../Images/original.png'
import styled from 'styled-components';

const Container=styled.div`
  
`
const CommCont=styled.div`
background-color:rgb(170, 63, 156) ;
margin-left: 2rem;
position: relative;
height: 30vh;
width: 40vh;
color: white;
display: flex;
align-items: center;
padding: 1rem;
box-shadow: 5px 5px 20px 5px rgba(73, 22, 66, 0.829) ;
`
const TriangleDiv=styled.div`
  position: absolute;
  background-color:rgb(170, 63, 156) ;
  height: 5vh;
  width: 2.5vw;
  top: 5rem;
  left: -1rem;
  transform: rotate(45deg);
`
function Example(props)
{
    var items = [
        {
            image: img1,
            name:"Mr Watson",
            comment:"I recently used XYZ software and was extremely impressed with the user experience. The interface was intuitive and easy to navigate, and the features were exactly what I needed for my project. "
        },
        {
            image: img2,
            name:"Ms Emma",
            comment:"The customer support team was also very helpful in answering any questions I had. I highly recommend this software to anyone in need of a reliable and user-friendly solution."
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper style={{border:"1pt solid black",height:"50vh",backgroundColor:"rgba(50, 26, 114, 0.548)",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
           <Container>
            <img src={props.item.image} style={{height:"20vh",width:"20wh",border:"0.5rem solid rgba(49, 26, 114, 0.801)",borderRadius:"80px",marginTop:"1.5rem"}}/>
            <p style={{color:"white"}}>{props.item.name}</p>
            </Container>
          <CommCont><TriangleDiv/>{props.item.comment}</CommCont> 
            
        </Paper>
    )
}

export default Example