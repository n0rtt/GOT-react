import React, {Component} from 'react'
import { Col, Row } from 'reactstrap'
import RandomChar from '../randomChar'
import ErrorMessage from '../errorMessage'
import styled from 'styled-components'

import gotService from '../services/gotService'

const Button = styled.button`
    padding: 1rem 3rem;
    color: #000;
    margin-bottom: 5rem;
`

export default class RandomCharPage extends Component {

    gotService = new gotService()

    state = {
        display: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    hideChar = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render() {

        const { display, error } = this.state

        if (error) {
            return <ErrorMessage />
        }

        const hideChar = display ? <RandomChar /> : null

        return (
            <Row>
                <Col lg={{ size: 5, offset: 0 }}>
                    {hideChar}
                </Col>
                <Col>
                    <Button onClick={this.hideChar}>
                        Click me
                    </Button>
                </Col>
            </Row>
        )
    }
}