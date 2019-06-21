import React, {Component} from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components'
import ErrorMessage from '../errorMessage'
import CharacterPage from '../characterPage'

const Button = styled.button`
    padding: 1rem 3rem;
    color: #000;
    margin-bottom: 5rem;
`

export default class App extends Component {

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

        if(this.state.error) {
            return <ErrorMessage />
        }

        const {display} = this.state

        const hideChar = display ? <RandomChar /> : null

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
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
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};
