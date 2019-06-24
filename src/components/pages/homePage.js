import React from 'react'
import styled from 'styled-components'
import Image from './got-home.jpg'

const Wrapper = styled.div`
    text-align: center;
    color: #fff;
    margin-bottom: 5rem;

    h4 {
        margin: 1.5rem 0;
    }
`
const Img = styled.img`
    width: 70%;
`

const HomePage = () => {

    return (
        <>
            <Wrapper>
                <h1>Welcome to Game of Thrones DB</h1>
                <h4>You can choose a character, book or house in the navigation bar above.</h4>
                <Img src={Image}></Img>
            </Wrapper>
        </>
    )
}

export default HomePage
