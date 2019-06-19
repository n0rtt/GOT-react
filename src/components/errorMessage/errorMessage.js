import React from 'react'
import styled from 'styled-components'
import Image from './error.jpg'

const Img = styled.img`
    width: 100%;
`

const ErrorMessage = () => {
    return (
        <>
            <Img src={Image}></Img>
            <span>Something went wrong ;(</span>
        </>
    )
}

export default ErrorMessage