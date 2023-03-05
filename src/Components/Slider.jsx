import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import img1 from '../Images/home1.jpg'
import img2 from '../Images/home2.jpg'
import styled from 'styled-components';

const Text=styled.span`
     position: absolute;
     color:white;
     top: 32%;
     left: 22.5%;
     font-size: 4rem;
     font-family: monospace;
     animation: text 2s;

     @keyframes text {
        0%{
            top:0
        }
        100%{
            top: 32%;
        }
     }
`
const ColoredDiv=styled.div`
    background-color: #0000002f;
    position: absolute;
    height: 150vh;
    width: 100%;
    top: 0;
`
const Slider = () => {
    var items = [
        {
            image: img1,
            text:"Stuck In Development?"
        },
        {
            image: img2,
            text:"Let's Call Develoopers"
        }
    ]

    return (
        <>
        <Carousel style={{position:"relative"}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
            
           
           </>
    )
}

function Item(props)
{
    return (
        <Paper style={{backgroundColor:" rgb(4, 17, 59)",position:"relative",alignItems:"center",justifyContent:"center"}}>         
            <img src={props.item.image} style={{height:"150vh",width:"200wh",objectFit:"cover",position:"relative"}}/> 
            <Text>{props.item.text}</Text> 
            <ColoredDiv/>    
        </Paper>
    )
}

export default Slider
