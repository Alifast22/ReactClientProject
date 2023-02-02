import React from 'react'
import styled from 'styled-components'
import { Card } from '../Components/Card'
const Container=styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const data = [
  { id: 1, name: 'Development',des:'At our software house, we specialize in custom software development to help businesses streamline their operations and improve their bottom line. ',logo:'https://cdn-icons-gif.flaticon.com/6172/6172532.gif' },
  { id: 2, name: 'Automation',des:"At our software house, we believe in the power of automation to improve efficiency, reduce errors, and save time for businesses. Our team of experts specializes in automating repetitive and time-consuming tasks.",logo: 'https://cdn-icons-gif.flaticon.com/6416/6416353.gif' },
  { id: 3, name: 'Amazon Services',des:"At our software house, we are experts in building and integrating solutions on the Amazon Web Services (AWS) platform. We have a team of certified AWS developers who have in-depth knowledge and experience in using the various services offered by AWS",logo:'https://cdn-icons-gif.flaticon.com/6416/6416394.gif' },
  { id: 4, name: 'Desgining',des:"At our software house, we understand the importance of design in creating a seamless user experience. That's why we place a strong emphasis on design in all of our software development projects",logo:'https://cdn-icons-gif.flaticon.com/6454/6454225.gif' },
  { id: 5, name: 'Content Writing',des:"At our software house, we understand the importance of clear and compelling content in today's digital landscape. That's why we offer professional content writing services to help businesses communicate effectively with their target audience",logo:'https://cdn-icons-gif.flaticon.com/6172/6172541.gif' },
  { id: 6, name: 'SEO',des:"At our software house, we understand the importance of search engine optimization (SEO) in driving traffic to your website and increasing visibility for your business. Our team of SEO experts can help you improve your website's ranking on search engines",logo:'https://cdn-icons-gif.flaticon.com/8112/8112604.gif' },
];

export const Categories = () => {
  return (
    <div>
      <Container>
        {data.map(item=>(
          <Card name={item.name} logo={item.logo} des={item.des}/>          
        )) 
        }
        </Container>
    </div>
  )
}
