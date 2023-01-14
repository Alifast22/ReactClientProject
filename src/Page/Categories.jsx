import React from 'react'
import styled from 'styled-components'
import { Card } from '../Components/Card'
const Container=styled.div`
    display: flex;
    justify-content: space-around;
`

export const Categories = () => {
  return (
    <div>
        <Container>
        <Card/>
        <Card/>
        <Card/>
        </Container>
    </div>
  )
}
